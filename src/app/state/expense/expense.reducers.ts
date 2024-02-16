import { createReducer, on } from '@ngrx/store';
import * as ExpenseActions from './expense.actions';
import { Expense } from 'src/app/models/expense/expense';

//how state looks
export interface ExpenseState {
  expense: Expense[];
  error: any;
}
//state of app before actions
export const initialState: ExpenseState = {
  expense: [],
  error: null,
};

export const expenseReducer = createReducer(
  initialState,
  //expense loading success
  on(ExpenseActions.showExpensesSuccess, (state, { expense }) => ({
    ...state,
    expense: expense,
    error: null,
  })),
  //expense loading failure
  on(ExpenseActions.showExpensesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //expense added success
  on(ExpenseActions.addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expense: [...state.expense, expense],
    error: null,
  })),
  //expense added failure
  on(ExpenseActions.addExpenseFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  /*expense changed success
on(ExpenseActions.changeExpenseSuccess, (state, {expense})=>({
    ...state,
    expense:expense,
    error: null
})),*/

  //expense changed failure
  on(ExpenseActions.changeExpenseFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //expense delete success
  on(ExpenseActions.deleteExpenseSuccess, (state, { id }) => ({
    ...state,
    expense: state.expense.filter((expense) => expense.id !== id),
    error: null,
  })),
  //expense delete failure
  on(ExpenseActions.deleteExpenseFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
