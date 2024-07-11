export class Medprescribelist {
        id: number = 0;
        med: Med = new Med();
        patient: Patient = new Patient();
        med_list_details: MedListDetails[] = [];
        morning: number = 0;
        noon: number = 0;
        night: number = 0;
        frequency: number = 0;
        date_of_prescribition: string = '';
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.med = new Med(data.med);
                this.patient = new Patient(data.patient);
                this.med_list_details = data.med_list_details ? data.med_list_details.map((item: any) => new MedListDetails(item)) : [];
                this.morning = data.morning || this.morning;
                this.noon = data.noon || this.noon;
                this.night = data.night || this.night;
                this.frequency = data.frequency || this.frequency;
                this.date_of_prescribition = data.date_of_prescribition || this.date_of_prescribition;
            }
        }
    }
    
    class Med {
        id: number = 0;
        appointment: Appointment = new Appointment();
        medical_history: string = '';
        symptoms: string = '';
        diagnosis: string = '';
        doctor_note: string = '';
        next_visit: string = '';
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.appointment = new Appointment(data.appointment);
                this.medical_history = data.medical_history || this.medical_history;
                this.symptoms = data.symptoms || this.symptoms;
                this.diagnosis = data.diagnosis || this.diagnosis;
                this.doctor_note = data.doctor_note || this.doctor_note;
                this.next_visit = data.next_visit || this.next_visit;
            }
        }
    }
    
    class Appointment {
        id: number = 0;
        patient: Patient = new Patient();
        specialization: Specialization = new Specialization();
        doctor: Doctor = new Doctor();
        appointment_date: string = '';
        time_slot: string = '';
        token: string = '';
        created_at: string = '';
        updated_at: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.patient = new Patient(data.patient);
                this.specialization = new Specialization(data.specialization);
                this.doctor = new Doctor(data.doctor);
                this.appointment_date = data.appointment_date || this.appointment_date;
                this.time_slot = data.time_slot || this.time_slot;
                this.token = data.token || this.token;
                this.created_at = data.created_at || this.created_at;
                this.updated_at = data.updated_at || this.updated_at;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class Patient {
        id: number = 0;
        opid: string = '';
        name: string = '';
        gender: string = '';
        dob: string = '';
        age: number = 0;
        blood_group: string = '';
        mobile: string = '';
        address: string = '';
        email: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.opid = data.opid || this.opid;
                this.name = data.name || this.name;
                this.gender = data.gender || this.gender;
                this.dob = data.dob || this.dob;
                this.age = data.age || this.age;
                this.blood_group = data.blood_group || this.blood_group;
                this.mobile = data.mobile || this.mobile;
                this.address = data.address || this.address;
                this.email = data.email || this.email;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class Specialization {
        id: number = 0;
        specialization: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.specialization = data.specialization || this.specialization;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class Doctor {
        doc_id: number = 0;
        user_id: User = new User();
        fees: number = 0;
        specialization: number = 0;
    
        constructor(data?: any) {
            if (data) {
                this.doc_id = data.doc_id || this.doc_id;
                this.user_id = new User(data.user_id);
                this.fees = data.fees || this.fees;
                this.specialization = data.specialization || this.specialization;
            }
        }
    }
    
    class User {
        emp_id: string = '';
        qualification: Qualification = new Qualification();
        qualification_id: number = 0;
        gender: Gender = new Gender();
        gender_id: number = 0;
        role: Role = new Role();
        role_id: number = 0;
        last_login: string = '';
        is_superuser: boolean = false;
        first_name: string = '';
        last_name: string = '';
        address: string = '';
        dob: string = '';
        contact_number: string = '';
        date_of_joining: string = '';
        email: string = '';
        password: string = '';
        is_active: boolean = true;
        is_staff: boolean = true;
        created_date: string = '';
        groups: any[] = [];
        user_permissions: any[] = [];
    
        constructor(data?: any) {
            if (data) {
                this.emp_id = data.emp_id || this.emp_id;
                this.qualification = new Qualification(data.qualification);
                this.qualification_id = data.qualification_id || this.qualification_id;
                this.gender = new Gender(data.gender);
                this.gender_id = data.gender_id || this.gender_id;
                this.role = new Role(data.role);
                this.role_id = data.role_id || this.role_id;
                this.last_login = data.last_login || this.last_login;
                this.is_superuser = data.is_superuser || this.is_superuser;
                this.first_name = data.first_name || this.first_name;
                this.last_name = data.last_name || this.last_name;
                this.address = data.address || this.address;
                this.dob = data.dob || this.dob;
                this.contact_number = data.contact_number || this.contact_number;
                this.date_of_joining = data.date_of_joining || this.date_of_joining;
                this.email = data.email || this.email;
                this.password = data.password || this.password;
                this.is_active = data.is_active || this.is_active;
                this.is_staff = data.is_staff || this.is_staff;
                this.created_date = data.created_date || this.created_date;
                this.groups = data.groups || this.groups;
                this.user_permissions = data.user_permissions || this.user_permissions;
            }
        }
    }
    
    class Qualification {
        id: number = 0;
        qualification: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.qualification = data.qualification || this.qualification;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class Gender {
        id: number = 0;
        gender: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.gender = data.gender || this.gender;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class Role {
        id: number = 0;
        role_name: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.role_name = data.role_name || this.role_name;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    
    class MedListDetails {
        id: number = 0;
        name: string = '';
        generic_name: string = '';
        category: string = '';
        type_medicine: string = '';
        description: string = '';
        storage_requirements: string = '';
        stock: number = 0;
        unit_price: string = '';
        date_created: string = '';
        expiry_date: string = '';
        reorder_level: number = 0;
        supplier: number = 0;
        suppliee: Supplier = new Supplier();
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.name = data.name || this.name;
                this.generic_name = data.generic_name || this.generic_name;
                this.category = data.category || this.category;
                this.type_medicine = data.type_medicine || this.type_medicine;
                this.description = data.description || this.description;
                this.storage_requirements = data.storage_requirements || this.storage_requirements;
                this.stock = data.stock || this.stock;
                this.unit_price = data.unit_price || this.unit_price;
                this.date_created = data.date_created || this.date_created;
                this.expiry_date = data.expiry_date || this.expiry_date;
                this.reorder_level = data.reorder_level || this.reorder_level;
                this.supplier = data.supplier || this.supplier;
                this.suppliee = new Supplier(data.suppliee);
            }
        }
    }
    
    class Supplier {
        id: number = 0;
        name: string = '';
        address: string = '';
        phone: string = '';
        email: string = '';
        is_active: boolean = true;
    
        constructor(data?: any) {
            if (data) {
                this.id = data.id || this.id;
                this.name = data.name || this.name;
                this.address = data.address || this.address;
                this.phone = data.phone || this.phone;
                this.email = data.email || this.email;
                this.is_active = data.is_active || this.is_active;
            }
        }
    }
    