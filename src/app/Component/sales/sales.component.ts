import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sales } from 'src/app/Model/sales';
import { SalesService } from 'src/app/Services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  salesForm: FormGroup;
  salesList: Sales[] = [];

  constructor(private formBuilder: FormBuilder, private salesService: SalesService) {
    this.salesForm = this.formBuilder.group({
      id: [null],
      departmentName: ['', Validators.required],
      employeesCount: [0, Validators.required],
      address: ['', Validators.required],
    });

    this.salesService.getSales().subscribe((sales) => {
      this.salesList = sales;
    });
  }

  onSubmit(): void {
    if (this.salesForm.valid) {
      const sale: Sales = this.salesForm.value;
      this.salesService.addOrUpdateSale(sale);
      this.salesForm.reset();
    }
  }

  editSale(sale: Sales): void {
    this.salesForm.setValue(sale);
  }
}
