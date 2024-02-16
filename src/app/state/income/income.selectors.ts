import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncomeState } from './income.reducers';
import { AppState } from '../app.state';

export const selectIncomeState = createFeatureSelector<IncomeState>('income');
export const selectAllIncomes = createSelector(
  selectIncomeState,
  (state: IncomeState) => state.income
);
export const selectIncomeError = createSelector(
  selectIncomeState,
  (state: IncomeState) => state.error
);
