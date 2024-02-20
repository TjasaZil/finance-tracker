import { Component, OnInit } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { Category } from 'src/app/models/category/category';
import { Observable } from 'rxjs';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Expense } from 'src/app/models/expense/expense';
import { Income } from 'src/app/models/income/income';

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
  constructor() {}
  ngOnInit(): void {}

  /** ADD */
  addCategory() {}
  addExpense() {}
  addIncome() {}

  /** CHANGE */
  changeCategory() {
    console.log('change');
  }
  changeExpense() {
    console.log('change');
  }
  changeIncome() {
    console.log('change');
  }

  /** DELETE */
  deleteCategory(id: string) {
    console.log('delete ' + id);
  }
  deleteExpense(id: string) {
    console.log('delete ' + id);
  }
  deleteIncome(id: string) {
    console.log('delete ' + id);
  }
}
