import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/models/users/user';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!:FormGroup;
  isSubmitted:boolean=false;
  error='';
  loginUser:User=new User();
  //formBuilder
  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  //control the validation
  get formControls(){
    return this.loginForm.controls
  }

  //functionality
  loginCredentials(){
    //checking the form is valid
    if(this.loginForm.invalid){
      this.error = "please enter the username and password";
      return;
    }
    //form is valid
    console.log(this.loginForm.value);
    //calling the verify method from service
    this.loginService.loginVerification(this.loginForm.value).subscribe((response:any)=>{
      console.log(response);
      console.log(response.role_id);
      if(response==null){
        this.error="invalid credentials"
      }
      else{
        if(response.role_id ==1){
          console.log("Admin logged")
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);

          this.router.navigate(['Admin/dash']);
        }
        else if(response.role_id==2){
          console.log("Recep logged");
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);
        }
        else if(response.role_id==3){
          console.log("Doc logged");
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);
        }
        else if(response.role_id==4){
          console.log("pharama logged");
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);
        }
        else if(response.role_id==5){
          console.log("labtech logged");
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);
        }
        else if(response.role_id==6){
          console.log("inventory logged");
          sessionStorage.setItem('email1',response.email);
          sessionStorage.setItem('Token',response.token);
          sessionStorage.setItem('role',response.role_id);

          localStorage.setItem('email1',response.email);
          localStorage.setItem('Token',response.token);
          localStorage.setItem('role',response.role_id);
        }
      }
    })
  }
}
