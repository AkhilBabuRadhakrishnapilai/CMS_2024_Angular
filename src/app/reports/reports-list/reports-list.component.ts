import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/shared/services/reports.service';
import { StockService } from 'src/app/shared/services/stock.service';
import { Reports } from 'src/app/shared/models/reports';
import { Supplier } from 'src/app/shared/models/supplier';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  term = '';
  selectedReport: Reports | null = null;
  reportData: any[] = [];
  suppliers: { [key: number]: string } = {};
  modalRef?: BsModalRef;

  @ViewChild('summaryModal', { static: true }) summaryModal!: TemplateRef<any>;

  constructor(
    public reportsservice: ReportService,
    public stockService: StockService,
    public router: Router,
    private modalService: BsModalService
  ) {
    // Register all Chart.js components
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.reportsservice.bindListReports();
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.stockService.getSuppliers().subscribe((data: any[]) => {
      data.forEach(supplier => {
        this.suppliers[supplier.id] = supplier.name;
      });
    });
  }

  viewReport(report: Reports): void {
    this.selectedReport = report;
    this.reportData = JSON.parse(report.data);
  }

  closeReport(): void {
    this.selectedReport = null;
    this.reportData = [];
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getSupplierName(supplierId: number): string {
    return this.suppliers[supplierId] || 'Unknown Supplier';
  }

  printReport(): void {
    if (this.selectedReport) {
      const printContent = document.querySelector('.modal-content');
      const WindowPrt = window.open('', '', 'width=600,height=600');
      if (WindowPrt && printContent) {
        WindowPrt.document.write(printContent.innerHTML);
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
      }
    }
  }

  viewSummary(): void {
    const counts = {
      suppliers: this.reportsservice.getCount('suppliers'),
      orders: this.reportsservice.getCount('orders'),
      medicines: this.reportsservice.getCount('medicines'),
      equipment: this.reportsservice.getCount('equipment'),
      miscellaneous: this.reportsservice.getCount('miscellaneous')
    };

    console.log('Summary counts:', counts);

    if (this.summaryModal) {
      const options: ModalOptions = { class: 'modal-lg' };
      this.modalRef = this.modalService.show(this.summaryModal, options);

      console.log('Modal opened');

      setTimeout(() => {
        const chart = new Chart('summaryChart', {
          type: 'bar',
          data: {
            labels: ['Suppliers', 'Orders', 'Medicines', 'Equipment', 'Miscellaneous'],
            datasets: [{
              label: ' Items',
              data: [
                counts.suppliers,
                counts.orders,
                counts.medicines,
                counts.equipment,
                counts.miscellaneous
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        console.log('Chart initialized:', chart);
      }, 500);
    }
  }
}
