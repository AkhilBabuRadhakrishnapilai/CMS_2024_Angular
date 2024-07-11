export class Newmed {
    id: number = 0;
    name: string = '';
    generic_name: string = '';
    category: string = '';
    type_medicine: string = '';
    description: string='';  // Optional field
    storage_requirements: string = '';
    batch_number: string = '';
    manufacturer: string = '';
    stock: number = 0;
    unit_price: number = 0.00;  // Decimal field
    date_created: Date = new Date();
    expiry_date: Date = new Date();
    reorder_level: number = 0; 
}
