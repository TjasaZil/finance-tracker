import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducers';
import { AppState } from '../app.state';

export const selectCategoryState =
  createFeatureSelector<CategoryState>('category');
export const selectAllCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.category
);
export const selectCategoryError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
);
