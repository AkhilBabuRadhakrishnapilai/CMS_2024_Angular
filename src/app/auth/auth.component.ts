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
  error:string | null=null;
  loginUser:User=new User();
  //formBuilder
  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  //control the validation
  get formControls(){
    return this.loginForm.controls
  }

  //functionality - on submit
  loginCredentials(){
    this.isSubmitted = true;
    //checking the form is valid
    if(this.loginForm.invalid){
      this.error = "please enter the username and password";
      return;
    }
    //form is valid
    console.log(this.loginForm.value);
    //calling the verify method from service
    this.loginService.loginVerification(this.loginForm.value).subscribe((response:any)=>{
      console.log(response,"cred");
      console.log(response.data.user.role_id);
      if(response==null){
        this.error="invalid credentials"
      }
      else{
        if(response.data.user.role_id =="1"){
          console.log("Admin logged")
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate(['admin/dash']);
        }
        else if(response.data.user.role_id=="2"){
          console.log("Recep logged");
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate(['receptionist/dash']);
        }
        else if(response.data.user.role_id=="3"){
          console.log("Doc logged");
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate(['shared/doctordashboard'])
        }
        else if(response.data.user.role_id=="4"){
          console.log("pharama logged");
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate([''])
        }
        else if(response.data.user.role_id=="5"){
          console.log("labtech logged");
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate(['shared/homelab'])
        }
        else if(response.data.user.role_id=="6"){
          console.log("inventory logged");
          sessionStorage.setItem('email1',response.data.user.email);
          sessionStorage.setItem('Token',response.data.Token);
          sessionStorage.setItem('role',response.data.user.role_id);

          localStorage.setItem('email1',response.data.user.email);
          localStorage.setItem('Token',response.data.Token);
          localStorage.setItem('role',response.data.user.role_id);

          this.router.navigate(['stock/stockdashboard'])
        }
      }
    })
  }
}
