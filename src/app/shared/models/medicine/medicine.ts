import { Supplier } from "../supplier/supplier";

export class Medicine {
    id: number=0;
    name: string='';
    generic_name: string='';
    category: string='';
    type_medicine: string='';
    description: string='';
    storage_requirements: string='';
    stock: number=0;
    unit_price: number=0;
    date_created: Date= new Date;
    expiry_date: Date= new Date;
    reorder_level: number=0;
    suppliee: Supplier=new Supplier();
}
