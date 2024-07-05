import { Supplier } from "./supplier";

export class Equipments {
    id:number= 0;
    name: string='' ;
    description: string='' ;
    suppliee: Supplier=new Supplier();
    quantity:number= 0; 
    reorder_level: number= 0;
    purchase_date: Date= new Date;
    warranty_expiry : Date= new Date;
}
