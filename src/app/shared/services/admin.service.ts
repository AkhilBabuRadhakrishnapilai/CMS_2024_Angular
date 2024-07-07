import { Injectable } from '@angular/core';
import { User } from '../models/users/user';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Qualification } from '../models/qualifications/qualification';
import { Specialization } from '../models/specializations/specialization';
import { Gender } from '../models/genders/gender';
import { ResolveStart } from '@angular/router';
import { Role } from '../models/roles/role';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  addEmployee(form: NgForm) {
    throw new Error('Method not implemented.');
  }
  insertUser(form: NgForm) {
    throw new Error('Method not implemented.');
  }
  user:User[]=[]
  qualifications:Qualification[]=[]
  specializations:Specialization[]=[]
  genders:Gender[]=[]
  roles:Role[]=[]
  // to store the user data from user list
  userEditData:User=new User();

  constructor(private httpClient:HttpClient) { }

  //user list
  listUsers():void{
    console.log("hey")
    this.httpClient.get<User[]>(environment.apiUrl+"/employeelist").subscribe((response:any)=>{
      console.log("hey");
      console.log(response);
      this.user=response;
      // console.log(this.user[1].department.department_name);
    });
  }


  //qualification
  listQualifications():void{
    this.httpClient.get<Qualification[]>(environment.apiUrl+"/qualifications").subscribe((response:any)=>{
      console.log("gotchaaaa qualifications");
      console.log(response);
      this.qualifications=response;
      console.log(this.qualifications[0].qualification);
    })
  }

  //specialization
  listSpecialization():void{
    this.httpClient.get<Specialization[]>(environment.apiUrl+"/specialization").subscribe((response:any)=>{
      console.log("gotchaaa specz");
      console.log(response);
      this.specializations=response;
      console.log(this.specializations[0].specialization);
    })
  }

  //gender
  listGender():void{
    this.httpClient.get<Gender[]>(environment.apiUrl+"/gender").subscribe((response:any)=>{
      console.log("gotchaa genders");
      console.log(response);
      this.genders = response;
      console.log(this.genders[0].gender);
    })
  }

  //roles
  listRoles():void{
    this.httpClient.get<Role[]>(environment.apiUrl+"/roles").subscribe((response:any)=>{
      console.log("gotchaaa roles");
      console.log(response);
      this.roles=response;
      console.log(this.roles[0].role_name);
    })
  }

  //update User Details
  updateUser(user:any):Observable<any>{
    console.log(user.emp_id+"in service");
    return this.httpClient.put(environment.apiUrl+"/edit/"+user.emp_id,user);
  }

  //disable user
  disableUser(id:string):Observable<any>{
    console.log("gotchaaa disable");
    return this.httpClient.delete(environment.apiUrl+"/disable/"+id);
  }

  //add users
  addUser(user:any):Observable<any>{
    console.log(user+"gotchaaa add user");
    return this.httpClient.post(environment.apiUrl+"/addemployee/",user);
  }
}
