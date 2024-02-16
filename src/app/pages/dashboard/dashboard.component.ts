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
import { Category } from 'src/app/models/category/category';
import { Store } from '@ngrx/store';
import { selectAllCategories } from '../../state/category/category.selectors';
import { Observable } from 'rxjs';
import { NgIf, NgFor, CommonModule } from '@angular/common';
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
  public category = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
  };
  constructor(private store: Store) {
    this.categories$ = this.store.select(selectAllCategories);
  }
  ngOnInit(): void {
    this.store.dispatch(showCategories());
  }

  addCategory() {
    this.store.dispatch(addCategory({ category: this.category }));
    this.category = {
      id: '',
      name: '',
      description: '',
      imageUrl: '',
    };
  }
  changeCategory() {}

  deleteCategory() {
    this.store.dispatch(deleteCategory({ id: this.category.id }));
  }
}
