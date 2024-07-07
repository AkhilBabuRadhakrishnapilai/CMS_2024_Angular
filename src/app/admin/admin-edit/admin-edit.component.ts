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
  addData={}
  constructor(public service:AdminService,public router:Router) { }

  ngOnInit(): void {
    // departments
    // this.service.listDepartments();
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
    const formdata = form.value;
    if(formdata.role==3){
      this.addData = {
        emp_id:formdata.emp_id,
        qualification_id:formdata.qualification,
        specialization_id:formdata.specialization,
        gender_id:formdata.gender,
        role_id:formdata.role,
        first_name:formdata.first_name,
        last_name:formdata.last_name,
        address:formdata.address,
        contact_number:formdata.contact_number,
        fees:formdata.fees,
        dob:formdata.dob,
        date_of_joining:formdata.date_of_joining,                        
        email:formdata.email,
        password:formdata.password
      }
    }
    else if(formdata.role==undefined){
      this.addData = {
        emp_id:formdata.emp_id,
        qualification_id:formdata.qualification,
        specialization_id:null,
        gender_id:formdata.gender,
        role_id:formdata.role,
        first_name:formdata.first_name,
        last_name:formdata.last_name,
        address:formdata.address,
        contact_number:formdata.contact_number,
        fees:formdata.fees,
        dob:formdata.dob,
        date_of_joining:formdata.date_of_joining,                        
        email:formdata.email,
        password:formdata.password
      }
    }
    this.service.updateUser(this.addData).subscribe((result:any)=>{
      console.log(result.value);
      console.log(result.emp_id,"in updateUser")
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
