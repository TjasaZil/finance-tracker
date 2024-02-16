import { createAction, props } from '@ngrx/store';
import { Expense } from 'src/app/models/expense/expense';

//add expense, show expense, change expense, delete expense, all success and faliure

//add eypense
export const addExpense = createAction(
  '[Expense] add Expense',
  props<{ expense: Expense }>()
);
export const addExpenseSuccess = createAction(
  '[Expense] add Expense Success',
  props<{ expense: Expense }>()
);
export const addExpenseFailure = createAction(
  '[Expense] add Expense Failure',
  props<{ error: any }>()
);
//show expense
export const showExpenses = createAction('[Expense] show Expenses');
export const showExpensesSuccess = createAction(
  '[Expense] show Expenses Success',
  props<{ expense: Expense[] }>()
);
export const showExpensesFailure = createAction(
  '[Expense] show Expense Failure',
  props<{ error: any }>()
);
//change expense
export const changeExpense = createAction('[Expense] change Expense');
export const changeExpenseSuccess = createAction(
  '[Expense] change Expense Success',
  props<{ expense: Expense[] }>
);
export const changeExpenseFailure = createAction(
  '[Expense] change Expense Failure',
  props<{ error: any }>()
);
//delete expense
export const deleteExpense = createAction(
  '[Expense] delete Expense',
  props<{ id: string }>()
);
export const deleteExpenseSuccess = createAction(
  '[Expense] delete Expense Success',
  props<{ id: string }>()
);
export const deleteExpenseFailure = createAction(
  '[Expense] delete Expense Failure',
  props<{ error: any }>()
);
