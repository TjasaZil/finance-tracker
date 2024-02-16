import { Component, OnInit } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import {
  showCategories,
  addCategory,
  deleteCategory,
  changeCategory,
} from '../../state/category/category.actions';
import {
  showExpenses,
  addExpense,
  deleteExpense,
  changeExpense,
} from 'src/app/state/expense/expense.actions';
import { Category } from 'src/app/models/category/category';
import { Store } from '@ngrx/store';
import { selectAllCategories } from '../../state/category/category.selectors';
import { Observable } from 'rxjs';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Expense } from 'src/app/models/expense/expense';
import { selectAllExpenses } from 'src/app/state/expense/expense.selectors';
import { Income } from 'src/app/models/income/income';
import { selectAllIncomes } from 'src/app/state/income/income.selectors';
import {
  addIncome,
  showIncome,
  deleteIncome,
  changeIncome,
} from 'src/app/state/income/income.actions';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DxButtonModule,
    DxChartModule,
    DxPieChartModule,
    NavigationComponent,
    NgIf,
    NgFor,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: '../../app.component.scss',
})
export class DashboardComponent implements OnInit {
  categories$: Observable<Category[]>;
  expenses$: Observable<Expense[]>;
  incomes$: Observable<Income[]>;
  public category = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
  };
  public expense = {
    id: '',
    userId: '',
    amount: 0,
    categoryId: '',
    date: new Date(),
    description: '',
  };
  public income = {
    id: '',
    userId: '',
    amount: 0,
    date: new Date(),
    description: '',
  };
  constructor(private store: Store) {
    this.categories$ = this.store.select(selectAllCategories);
    this.expenses$ = this.store.select(selectAllExpenses);
    this.incomes$ = this.store.select(selectAllIncomes);
  }
  ngOnInit(): void {
    this.store.dispatch(showCategories());
    this.store.dispatch(showExpenses());
    this.store.dispatch(showIncome());
  }

  /** ADD */
  addCategory() {
    this.store.dispatch(addCategory({ category: this.category }));
    this.category = {
      id: '',
      name: '',
      description: '',
      imageUrl: '',
    };
  }
  addExpense() {
    this.store.dispatch(addExpense({ expense: this.expense }));
    this.expense = {
      id: '',
      userId: '',
      amount: 0,
      categoryId: '',
      date: new Date(),
      description: '',
    };
  }
  addIncome() {
    this.store.dispatch(addIncome({ income: this.income }));
    this.income = {
      id: '',
      userId: '',
      amount: 0,
      date: new Date(),
      description: '',
    };
  }

  /** CHANGE */
  changeCategory() {
    console.log('change');
    this.store.dispatch(changeCategory());
  }
  changeExpense() {
    console.log('change');
    this.store.dispatch(changeExpense());
  }
  changeIncome() {
    console.log('change');
    this.store.dispatch(changeIncome());
  }

  /** DELETE */
  deleteCategory(id: string) {
    console.log('delete ' + id);
    this.store.dispatch(deleteCategory({ id }));
  }
  deleteExpense(id: string) {
    console.log('delete ' + id);
    this.store.dispatch(deleteExpense({ id }));
  }
  deleteIncome(id: string) {
    console.log('delete ' + id);
    this.store.dispatch(deleteIncome({ id }));
  }
}
