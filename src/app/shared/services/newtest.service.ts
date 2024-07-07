import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newtest } from '../models/newtest';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BookAppointment } from '../models/book-appointment';
import { TestPrescribed } from '../models/test-prescribed';
import { LiveTest } from '../models/live-test';

@Injectable({
  providedIn: 'root'
})
export class NewtestService {

  tests:Newtest[]=[];
  formEmployeeData: Newtest = new Newtest();
  formEmployeeData1: LiveTest = new LiveTest();
  patients: LiveTest[] = []; 
  testprescribe1:TestPrescribed=new TestPrescribed();
  testprescribe:TestPrescribed[]=[]
  

  constructor(private httpClient:HttpClient) { }
  viewlabtest():void{
    this.httpClient.get<Newtest[]>
    
    (environment.apiUrl + "/test_list")
    .subscribe(response=>this.tests=response)
    
  }
  viewlabtest1():void{
    this.httpClient.get<TestPrescribed[]>
    
    (environment.apiUrl + "/isactivetruelist")
    .subscribe(response=>this.testprescribe=response)
    
  }
  inserttest(test:Newtest):Observable<any>{
    console.log(test);
    return this.httpClient.post(environment.apiUrl + "/test_list",test)
  }
  updateEmployee(test:Newtest):Observable<any>{
    console.log(test);
    return this.httpClient.put 
    (environment.apiUrl + "/test_list/" + test.id , test)
  }
  //disable employee
  disableEmployee(id:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl +"/test_list/"+id)
    
  }
  disablePatient(id:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl +"/isactivetrue/"+id)
 }
  
  getAllPatients():void{

    this.httpClient.get<TestPrescribed[]>
    
    (environment.apiUrl + "/isactivetruelist")
    .subscribe(response=>this.testprescribe=response)
    console.log(Response)
    console.log(this.testprescribe);

  }

  getAllPats(): Observable<TestPrescribed[]> {
    return this.httpClient.get<TestPrescribed[]>(environment.apiUrl + "/details_list");
  }
  processCreditCardPayment(liveTestId: number, creditCardDetails: any): Observable<any> {
    // Example URL assuming you have an API endpoint to update is_active
    const url = `${environment.apiUrl}/details_list/${liveTestId}/`;
    // Assuming you send credit card details to the backend for processing
    return this.httpClient.put(url, { is_active: false, creditCard: creditCardDetails });
  }

  getPatients(): Observable<LiveTest[]> {
    return this.httpClient.get<LiveTest[]>(`${environment.apiUrl}/details_list`);
    // Adjust the endpoint `/patients` based on your API design
  }
  viewbill():void{
    this.httpClient.get<LiveTest[]>
    
    (environment.apiUrl + "/details_list")
    .subscribe(response=>this.patients = response.filter(patients => patients.id))
    
    
  }
  getAll():void{
    console.log("hi im here")
    this.httpClient.get<TestPrescribed[]>
    
    (environment.apiUrl + "/isactivefalselist")
    .subscribe(response=>this.testprescribe=response)
    
  }

  updatevalue(inputJson:LiveTest):Observable<any>{
    console.log(inputJson);
    return this.httpClient.post(environment.apiUrl + "/details_list",inputJson)
  }
  
  getrecord():void{
    this.httpClient.get<LiveTest[]>
    (environment.apiUrl + "/live")
    .subscribe(response=>this.patients=response)
    
  }

  
  insertvalue(test:LiveTest):Observable<any>{
    console.log(test);
    return this.httpClient.post(environment.apiUrl + "/list_of_values1",test)
  }

}
  // printbill:(patient:LiveTest):void{
  //   thishttpClient.get<LiveTest[]>
  //   (environment.apiUrl + "/list_of_values")
  //   .subscribe(response=>this.patient=response)
    
  // }


