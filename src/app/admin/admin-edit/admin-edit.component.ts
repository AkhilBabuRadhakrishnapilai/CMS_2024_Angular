import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  constructor(public service:AdminService,public router:Router) { }

  ngOnInit(): void {
    // departments
    this.service.listDepartments();
    // specialization
    this.service.listSpecialization();
    //gender
    this.service.listGender();
    //qualifications
    this.service.listQualifications();
    //roles
    this.service.listRoles();
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.editUser(form);
  }
  editUser(form: NgForm) {
    console.log("gotchaa editing")
    this.service.updateUser(form.value).subscribe((result:any)=>{
      console.log(result);
      this.reset(form);
      this.router.navigate(['admin/list']);
    })
  }
  reset(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }
  }

}
