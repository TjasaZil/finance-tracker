import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from 'src/app/models/expense/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
private baseURL="https://financetracker-970ea-default-rtdb.europe-west1.firebasedatabase.app/expenses";
  constructor(private http:HttpClient) { }

    /** add, show, change and delete expense */

    // shows all expenses
    getExpenses(): Observable <Expense[]>{
      return this.http.get<Expense[]>(`${this.baseURL}`);
    }

    // adds expense
    addExpense(expense: Expense): Observable<Expense>{
      return this.http.post<Expense>(this.baseURL, expense);
    }

    //changes expense
    changeExpense(expense: Expense): Observable<Expense>{
      return this.http.put<Expense>(this.baseURL + '/' + expense.id, expense)
    }

    //deletes expense
    deleteExpense(expense:Expense): Observable<Expense>{
      return this.http.delete<Expense>(this.baseURL + '/' + expense.id)
    }
}
