// src/app/services/report.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reports } from '../models/reports';
// import { Report } from '../models/report.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class ReportService {
 reports:Reports[]=[];
 constructor(private httpClient:HttpClient) { }
    bindListReports():void{
      this.httpClient.get<Reports[]>
      (environment.apiUrl + "/get_report")
      .subscribe(response=>this.reports=response)
      console.log(this.reports)
    }
    getCount(type: string): number {
      return this.reports.reduce((count, report) => {
        if (report.report_type.toLowerCase() === type.toLowerCase()) {
          return count + 1;  // Increment count for each matching report
        }
        return count;
      }, 0);
    }
}
