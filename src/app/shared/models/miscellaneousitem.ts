import { Supplier } from "./supplier";

export class Miscellaneousitem {
    id:number=0;
    name: string='';
    description: string='';
    suppliee: Supplier=new Supplier();
    quantity: number=0;
    reorder_level:number=0;

}
