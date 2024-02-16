import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget/budget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private baseURL =
    'https://financetracker-970ea-default-rtdb.europe-west1.firebasedatabase.app/budgets.json';
  constructor(private http: HttpClient) {}

  /** add, show, change and delete budget */

  //shows all budgets
  getBudget(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.baseURL}`);
  }

  //adds a budget
  addBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.baseURL, budget);
  }

  //changes budget
  changeBudget(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(this.baseURL + '/' + budget.id, budget);
  }

  //deletes budget
  deleteBudget(budget: Budget): Observable<Budget> {
    return this.http.delete<Budget>(this.baseURL + '/' + budget.id);
  }
}
