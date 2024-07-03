import { Injectable } from '@angular/core';
import { User } from '../models/users/user';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user:User[]=[]

  constructor(private httpClient:HttpClient) { }

  //user list
  listUsers():void{
    console.log("hey")
    this.httpClient.get<User[]>(environment.apiUrl+"/employeelist").subscribe((response:any)=>{
      console.log("hey");
      console.log(response);
      this.user=response;
      console.log(this.user[1].department.department_name);
    });
  }
}
