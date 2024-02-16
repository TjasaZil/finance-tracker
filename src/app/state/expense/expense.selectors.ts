import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from './expense.reducers';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>('expense');
export const selectAllExpenses = createSelector(
  selectExpenseState,
  (state: ExpenseState) => state.expense
);
export const selectExpenseError = createSelector(
  selectExpenseState,
  (state: ExpenseState) => state.error
);
