import { Injectable } from '@angular/core';
import { Medprescribelist } from '../models/medprescribelist';
import { Medtest } from '../models/medprescribed/medtest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacistServiceService {

   //pharmacist:Medprescribelist[]=[];
  // formdata:Medtest=new Medtest;
  pharmacist:Medtest[]=[];
  constructor(private httpClient:HttpClient) { }

  bindListPharmacist(): void {

      console.log("im here..")
      this.httpClient.get<Medtest[]>
      (environment.apiUrl+'/medPrescribed_list')
      .subscribe((response:any)=>this.pharmacist=response)
      }

    }





