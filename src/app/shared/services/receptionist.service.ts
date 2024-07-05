import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Patientdetails } from '../models/patientdetails/patientdetails';
import { Bookappointment } from '../models/bookappointment/bookappointment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ReceptionistService {
  patient_details: Patientdetails[] = [];
  book_appointment: Bookappointment[] = [];
  formPatientData: Patientdetails = new Patientdetails();
  formAppoinmentData:Bookappointment = new Bookappointment();
  constructor(public httpClient: HttpClient) { }

  //listing all patients
  listPatients(): void {
    this.httpClient.get<Patientdetails[]>
      (environment.apiUrl + "/patient_list").subscribe(response => this.patient_details = response)
  }
  //insert method for adding patients
  insertPatient(patient_details: Patientdetails): Observable<any> {
    console.log("in service");
    console.log(patient_details);
    return this.httpClient.post(environment.apiUrl + "/patient_list", patient_details)
  }
  //edit patient
  updatePatient(patient_details: Patientdetails): Observable<any> {
    console.log(patient_details);
    return this.httpClient.put(environment.apiUrl + "/patient_info/" + patient_details.id, patient_details)
  }
  //disable patient
  disablePatient(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/patient_info/" + id)
  }
  //getting all appointments
  listAppointments():void{
    this.httpClient.get<Bookappointment[]>
    (environment.apiUrl + "/appointment_list").subscribe(response => this.book_appointment = response)
  }
  //adding appoinments
  insertAppointment(book_appointment:Bookappointment):Observable<any>{
    console.log("in Service adding appoinments");
    console.log(book_appointment);
    return this.httpClient.post(environment.apiUrl + "/appointment_list",book_appointment)
  }
}
