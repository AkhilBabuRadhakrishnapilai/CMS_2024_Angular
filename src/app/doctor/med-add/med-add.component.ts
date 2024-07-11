import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Newmed } from 'src/app/shared/models/newmed/newmed';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-med-add',
  templateUrl: './med-add.component.html',
  styleUrls: ['./med-add.component.scss']
})
export class MedAddComponent implements OnInit {

  availableMedicine: Newmed[] = [];

  constructor(public doctorService: DoctorService, public router: Router) { }

  ngOnInit(): void {
    // Fetch available medicine
    this.doctorService.getAvailableMedicine().subscribe(
      data => this.availableMedicine = data,
      error => console.error("Error fetching available medicine tests", error)
    );
  }

  addMed(form: NgForm): void {
    if (form.valid && form.dirty) {
      const formData = form.value;
      console.log('im here');
      console.log(form.value);

      const medData = {
        med: formData.med,
        med_list: formData.med_list.map((medId: number) => medId),
        morning: formData.morning,
        noon: formData.noon,
        night: formData.night,
        frequency: formData.frequency,
        date_of_prescribition: formData.date_of_prescribition,
      };

      console.log('sending medtest data:', medData);

      this.doctorService.insertMed(medData).subscribe(
        result => {
          console.log('Medicine added successfully:', result);
          this.resetForm(form);
          this.router.navigate(['shared/doctordashboard']);
        },
        error => {
          console.error('Error adding med test:', error);
        }
      );
    }
  }

  resetForm(form: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
  }

  onSubmit(form: NgForm): void {
    this.addMed(form);
  }
}
