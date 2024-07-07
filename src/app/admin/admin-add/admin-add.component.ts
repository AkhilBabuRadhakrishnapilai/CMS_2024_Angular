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
   addData={}
   minDate:string='';
   maxDate:string='';
   currentDate:string='';
  constructor(public service:AdminService,public router:Router) { }

  ngOnInit(): void {
    //departments
    // this.service.listDepartments();
    // specialization
    this.service.listSpecialization();
    //gender
    this.service.listGender();
    //qualifications
    this.service.listQualifications();
    //roles
    this.service.listRoles();

    //dob
    const today = new Date();
    const minYear = today.getFullYear()-100;
    const maxYear = today.getFullYear() -60;

    this.minDate = new Date(minYear, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    this.maxDate = new Date(maxYear, today.getMonth(), today.getDate()).toISOString().split('T')[0];

    this.currentDate = today.toISOString().split('T')[0];
  }

  onSubmit(form:NgForm){
    console.log(form.value+"adddddddd");
    console.log(form.value);
    this.addEmployees(form);
  }

  addEmployees(form:NgForm){
    console.log(form.value);
    console.log("add.ts");
    const formdata = form.value;
    if(formdata.role==3){
      this.addData = {
        qualification_id:formdata.qualification,
        specialization_id:formdata.specialization,
        fees:formdata.fees,
        gender_id:formdata.gender,
        role_id:formdata.role,
        first_name:formdata.first_name,
        last_name:formdata.last_name,
        address:formdata.address,
        contact_number:formdata.contact_number,
        dob:formdata.dob,
        date_of_joining:formdata.date_of_joining,                        
        email:formdata.email,
        password:formdata.password
      }
    }
    else if(formdata.role==undefined){
      this.addData = {
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
    
    console.log(this.addData);
    this.service.addUser(this.addData).subscribe({
      next: (result: any) => {
          console.log("user JSON", form.value);
          console.log(result, "added");
          this.reset(form);
          this.router.navigate(['admin/list']).then((navigated: boolean) => {
              if (navigated) {
                  console.log('Navigation to list successful!');
              } else {
                  console.log('Navigation to list failed!');
              }
          });
      },
      error: (err: any) => {
          console.error('Error adding user:', err);
          // Log the actual response body
          if (err.error instanceof ProgressEvent) {
              console.error('Network error or CORS issue:', err);
          } else {
              console.error('Backend error response:', err.error);
          }
      }
  });
  }
  reset(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }
  }
}
