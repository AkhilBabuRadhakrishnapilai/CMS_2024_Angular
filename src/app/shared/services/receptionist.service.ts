import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Patientdetails } from '../models/patientdetails/patientdetails';
import { Bookappointment } from '../models/bookappointment/bookappointment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Specialization } from '../models/specializations/specialization';
import { Doctor } from '../models/doctor/doctor';


@Injectable({
  providedIn: 'root'
})

export class ReceptionistService {
  patient_details: Patientdetails[] = [];
  book_appointment: Bookappointment[] = [];
  doctor: Doctor[] = [];
  specialization: Specialization[] = [];
  formPatientData: Patientdetails = new Patientdetails();
  formAppoinmentData: Bookappointment = new Bookappointment();

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
  //getting opid
  // getPatientByOpid(opid: string): Observable<any> {
  //   return this.httpClient.get<Patientdetails>(`${environment.apiUrl}/patient_list/${opid}`);
  //   return this.httpClient.get(environment.apiUrl +"/patient_list/" + opid)
  // }
  getPatientByOpid(opid: string): Observable<Patientdetails> {
    return this.httpClient.get<Patientdetails>(`${environment.apiUrl}/patient_list/${opid}`);
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
  listAppointments(): void {
    this.httpClient.get<Bookappointment[]>
      (environment.apiUrl + "/appointment_list").subscribe(response => this.book_appointment = response)

  }
  //adding appoinments
  insertAppointment(book_appointment: Bookappointment): Observable<any> {
    console.log("in Service adding appoinments");
    console.log(book_appointment);
    return this.httpClient.post(environment.apiUrl + "/appointment_list", book_appointment)
  }
  // editing appointments
  updateAppointment(book_appointment:Bookappointment):Observable<any>{
    console.log(book_appointment);
    return this.httpClient.put(environment.apiUrl + "/appointment_info/" + book_appointment.id, book_appointment)
  }
  //getting all specializations
  listSpecialization(): void {
    this.httpClient.get<Specialization[]>
      (environment.apiUrl + "/specialization").subscribe(response => this.specialization = response)
  }
  //getting all doctors
  listDoctor(): void {
    this.httpClient.get<Doctor[]>
      (environment.apiUrl + "/doctors").subscribe(response => this.doctor = response)
  }
  //generating Token
  fetchToken(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/token")
  }
}

