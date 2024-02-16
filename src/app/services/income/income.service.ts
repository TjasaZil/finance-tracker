import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from 'src/app/models/income/income';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private baseURL =
    'https://financetracker-970ea-default-rtdb.europe-west1.firebasedatabase.app/incomes.json';
  constructor(private http: HttpClient) {}

  /** add, show, change and delete income */

  //shows all incomes
  getIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.baseURL}`);
  }
  //adds income
  addIncome(income: Income): Observable<Income> {
    return this.http.post<Income>(this.baseURL, income);
  }
  //changes income
  changeIncome(income: Income): Observable<Income> {
    return this.http.put<Income>(this.baseURL + '/' + income.id, income);
  }

  //deletes income
  deleteIncome(income: Income): Observable<Income> {
    return this.http.delete<Income>(this.baseURL + '/' + income.id);
  }
}
