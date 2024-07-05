import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';
import { Equipments } from '../models/equipments';
import { Miscellaneousitem } from '../models/miscellaneousitem';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  medicine: Medicine[] =[];
  suppiler: Supplier[] =[];
  equipment: Equipments[] =[];
  miscellaneousitem:Miscellaneousitem[]=[];
  supplier: Supplier[] =[];
  order: Order[] =[];
  formMedicineData: Medicine = new Medicine();
  formEquipmentData: Equipments = new Equipments();
  formMiscellaneousitemData: Miscellaneousitem = new Miscellaneousitem();
  formSupplierData: Supplier = new Supplier();
  formOrderData: Order = new Order();
  constructor(private httpClient:HttpClient) { }
    bindListMedicine():void{
      this.httpClient.get<Medicine[]>
      (environment.apiUrl + "/Medicine")
      .subscribe(response=>this.medicine=response)
      console.log(this.medicine)
    }
    bindListEquipment():void{
      this.httpClient.get<Equipments[]>
      (environment.apiUrl + "/equipments")
      .subscribe(response=>this.equipment=response)
      console.log(this.equipment)
    }
    bindListMiscellaneousitem():void{
      this.httpClient.get<Miscellaneousitem[]>
      (environment.apiUrl + "/MiscellaneousItem")
      .subscribe(response=>this.miscellaneousitem=response)
      console.log(this.miscellaneousitem)
    }
    bindListSupplier():void{
      this.httpClient.get<Supplier[]>
      (environment.apiUrl + "/suppliers")
      .subscribe(response=>this.supplier=response)
      console.log(this.supplier)
    }
    bindListOrder():void{
      this.httpClient.get<Order[]>
      (environment.apiUrl + "/orders")
      .subscribe(response=>this.order=response)
      console.log(this.order)
    }
    disableMedicine(id:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl +"/Medicine/"+id)
      
    }
    disableEquipment(id:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl +"/equipments/"+id)
      
    }
    disableSupplier(id:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl +"/suppliers/"+id)
      
    }
    disableOrder(id:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl +"/orders/"+id)
      
    }
    disableMiscellaneousitem(id:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl +"/MiscellaneousItem/"+id)
      
    }
    getAllSuppiler():void{
      this.httpClient.get(environment.apiUrl + "/suppliers")
      .toPromise().then
      (response => this.suppiler=response as Supplier[])
      console.log(this.suppiler)
    }
    // getAll():void{
    //   this.httpClient.get(environment.apiUrl + "/suppliers")
    //   .toPromise().then
    //   (response => this.suppiler=response as Supplier[])
    //   console.log(this.suppiler)
    // }
    updateMedicine(medicine:Medicine):Observable<any>{
      console.log(medicine.id,"hey");
      return this.httpClient.put 
      (environment.apiUrl + "/Medicine/" + medicine.id , medicine)
    }
    updateEquipment(equipment:Equipments):Observable<any>{
      console.log(equipment.id,"hey");
      return this.httpClient.put 
      (environment.apiUrl + "/equipments/" + equipment.id , equipment)
    }
    updateMiscellaneousitem(miscellaneousitem:Miscellaneousitem):Observable<any>{
      console.log(miscellaneousitem.id,"hey");
      return this.httpClient.put 
      (environment.apiUrl + "/MiscellaneousItem/" + miscellaneousitem.id , miscellaneousitem)
    }
    updateSupplier(supplier:Supplier):Observable<any>{
      console.log(supplier.id,"hey");
      return this.httpClient.put 
      (environment.apiUrl + "/suppliers/" + supplier.id , supplier)
    }
    updateOrder(order:Order):Observable<any>{
      console.log(order.id,"hey");
      return this.httpClient.put 
      (environment.apiUrl + "/orders/" + order.id , order)
    }
    //insertN Employee
  insertMedicine(medicine:Medicine):Observable<any>{
    console.log(medicine);
    return this.httpClient.post(environment.apiUrl + "/Medicine",medicine)
  }
  insertEquipment(equipment:Equipments):Observable<any>{
    console.log(equipment);
    return this.httpClient.post(environment.apiUrl + "/equipments",equipment)
  }
  insertMiscellaneousitem(miscellaneousitem:Miscellaneousitem):Observable<any>{
    console.log(miscellaneousitem);
    return this.httpClient.post(environment.apiUrl + "/MiscellaneousItem",miscellaneousitem)
  }
  insertSupplier(supplier:Supplier):Observable<any>{
    console.log(supplier);
    return this.httpClient.post(environment.apiUrl + "/suppliers",supplier)
  }
  insertOrder(order:Order):Observable<any>{
    console.log(order);
    return this.httpClient.post(environment.apiUrl + "/orders",order)
  }
  }

