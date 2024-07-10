import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient:HttpClient, public router: Router) { }
  //verify email and password
  public loginVerify(user:User){
    return this.httpClient.post<User>(environment.apiUrl+'/login',user);
  }

  public logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('role');

    localStorage.removeItem('email');
    localStorage.removeItem('Token');
    localStorage.removeItem('role');
    this.router.navigate(['auth/login']);
  }
}
