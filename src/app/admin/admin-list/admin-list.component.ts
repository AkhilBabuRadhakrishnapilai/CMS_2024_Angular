import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/users/user';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  searchTerm='';

  constructor(public service:AdminService,public router:Router) { }

  ngOnInit(): void {
    this.service.listUsers();
  }

  editUser(user:User){
    this.populateUserData(user);
    this.router.navigate(['admin/edit',user.emp_id]);
  }
  populateUserData(user: User) {
    this.service.userEditData = Object.assign({},user)
  }

  //disable
  disableRecord(emp_id:string){
    if(confirm("Are you sure want to disable this record?")){
      this.service.disableUser(emp_id).subscribe((response:any)=>{
        console.log(response);
        this.service.listUsers();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
