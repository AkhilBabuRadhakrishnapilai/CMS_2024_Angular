import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  public loginVerification(user:User){
    return this.httpClient.post<User>(environment.apiUrl+'/login',user)
  }

  public logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('Token');
    localStorage.removeItem('role');
    this.router.navigate(['auth/login'])
  }
}
