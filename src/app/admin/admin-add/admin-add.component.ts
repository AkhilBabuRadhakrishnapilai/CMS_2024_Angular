import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {

  constructor(public service:AdminService,public router:Router) { }

  ngOnInit(): void {
    //departments
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
    console.log(form.value+"adddddddd");
    this.service.addEmployee(form);
  }

  addEmployee(form:NgForm){
    this.service.addUser(form.value).subscribe((result:any)=>{
      console.log(result+"adddddded");
      this.reset(form);
      this.router.navigate(['admin/list'])
    })
  }
  reset(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }
  }
}
