import { Supplier } from "./supplier";

export class Order {
    id: number=0;
    item_name: string='';
    category: string='';
    ordered_quantity: number=0;
    suppliee: Supplier=new Supplier();  
    price: number=0;      
    order_date: Date= new Date();
    expected_delivery_date: Date= new Date();
    status: string='';
}
