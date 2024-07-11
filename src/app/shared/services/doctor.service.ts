import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, tap } from 'rxjs';
import { Bookappointment } from '../models/bookappointment/bookappointment';
import { Diagnosis } from '../models/diagnosis/diagnosis';
import { Medtest } from '../models/medtest/medtest';
import { Labtests } from '../models/labtests/labtests';
import { Newtest } from '../models/newtest/newtest';
import { Labtests2 } from '../models/labtests2';
import { Medtest2 } from '../models/medtest2';
import { Newmed } from '../models/newmed/newmed';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  appointment_details: Bookappointment[] = [];
  diagnosis_details: Diagnosis[] = [];
  medtest_details: Medtest[] = [];
  medtest_details2: Medtest2[] = [];
  labtest_details: Labtests[] = [];
  labtest_details2: Labtests2[] = [];
  formEmployeeData: Bookappointment = new Bookappointment();
  formDiagnosisData: Diagnosis = new Diagnosis();
  formLabData: Labtests = new Labtests();
  formMedData: Medtest = new Medtest();
  constructor(public httpClient: HttpClient) { }

  // List all Appointment
  listAppointment(): void {
    this.httpClient.get<Bookappointment[]>(
      environment.apiUrl + "/appointment_list"
    ).subscribe(response => this.appointment_details = response);
  }

  // List all Diagnosis
  listDiagnosis(): void {
    this.httpClient.get<Diagnosis[]>(
      environment.apiUrl + "/diagnosis_list"
    ).subscribe(response => this.diagnosis_details = response);
  }

  // Post diagnosis
  insertDiagnosis(diagnosis_details: Diagnosis): Observable<any> {
    console.log("Attempting to add diagnosis:", diagnosis_details); // Log to see what data is being sent
    return this.httpClient.post(environment.apiUrl + "/diagnosis_list", diagnosis_details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      tap(response => console.log('Response from server:', response)), // Log the server response
      catchError(error => {
        console.error('Error from server:', error); // Log any errors from the server
        throw error; // Rethrow the error to propagate it downstream
      })
    );
  }

  // List All Labtest
  listLabtest(): void {
    this.httpClient.get<Labtests[]>(
      environment.apiUrl + "/testPrescribed_list"
    ).subscribe(response => this.labtest_details = response);
  
  }
  listLabtest2(): void {
    this.httpClient.get<Labtests2[]>(
      environment.apiUrl + "/testPrescribed_list"
    ).subscribe(response => this.labtest_details2 = response);
  
  }

  //Post Labtest

  insertLab(labtest_details: any): Observable<any> {
    console.log("Attempting to add Labtests:", labtest_details); // Log to see what data is being sent
    return this.httpClient.post(environment.apiUrl + "/testPrescribed_list", labtest_details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      tap(response => console.log('Response from server:', response)), // Log the server response
      catchError(error => {
        console.error('Error from server:', error); // Log any errors from the server
        throw error; // Rethrow the error to propagate it downstream
      })
    );
  }


  

  // List All med
  listMedtest(): void {
    this.httpClient.get<Medtest[]>(
      environment.apiUrl + "/medPrescribed_list"
    ).subscribe(response => this.medtest_details = response);
  }

  listMedtest2(): void {
    this.httpClient.get<Medtest2[]>(
      environment.apiUrl + "/medPrescribed_list"
    ).subscribe(response => this.medtest_details2 = response);
  }
  //Post Med

  insertMed(medtest_details: any):Observable<any>{
    console.log("Attempting to add Med:", medtest_details);
    return this.httpClient.post(environment.apiUrl + "/medPrescribed_list",medtest_details,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .pipe(
      tap(response =>console.log('Response from server:',response)),
      catchError(error => {
        console.error("Error from server:",error);
        throw error;
      })
    );
  }



  setFormEmployeeData(data: Bookappointment): void {
    this.formEmployeeData = data;
  }

  getFormEmployeeData(): Bookappointment {
    return this.formEmployeeData;
  }

  getAvailableLabTests(): Observable<Newtest[]> {
    return this.httpClient.get<Newtest[]>(environment.apiUrl + "/list_of_test");
  }

  getAvailableMedicine(): Observable<Newmed[]> {
    return this.httpClient.get<Newmed[]>(environment.apiUrl + "/list_of_medicine");
  }
}
