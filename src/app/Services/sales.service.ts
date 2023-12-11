import { Injectable } from '@angular/core';
import { Sales } from '../Model/sales';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private sales: Sales[] = [];
  private salesSubject: BehaviorSubject<Sales[]> = new BehaviorSubject<Sales[]>([]);

  constructor() {}

  getSales(): Observable<Sales[]> {
    return this.salesSubject.asObservable();
  }

  addOrUpdateSale(sale: Sales): void {
    if (sale.id) {
      // Update existing sale
      const index = this.sales.findIndex((s) => s.id === sale.id);
      if (index !== -1) {
        this.sales[index] = sale;
      }
    } else {
      // Add new sale
      sale.id = this.sales.length + 1;
      this.sales.push(sale);
    }

    // Update BehaviorSubject with the new sales array
    this.salesSubject.next([...this.sales]);
  }
}
