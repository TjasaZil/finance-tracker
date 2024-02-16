import { createAction, props } from '@ngrx/store';
import { Budget } from 'src/app/models/budget/budget';

//add budget, show budget, change budget, delete budget, all success and faliure

//add budget
export const addBudget = createAction(
  '[Budget] add Budget',
  props<{ budget: Budget }>()
);
export const addBudgetSuccess = createAction(
  '[Budget] add Budget Success',
  props<{ budget: Budget }>()
);
export const addBudgetFailure = createAction(
  '[Budget] add Budget Failure',
  props<{ error: any }>()
);
//show budgets
export const showBudget = createAction('[Budget] show Budget');
export const showBudgetSuccess = createAction(
  '[Budget] show Budget Success',
  props<{ budget: Budget[] }>()
);
export const showBudgetFailure = createAction(
  '[Budget] show Budget Failure',
  props<{ error: any }>()
);
//change budget
export const changeBudget = createAction('[Budget] change Budget');
export const changeBudgetSuccess = createAction(
  '[Budget] change Budget Success',
  props<{ budget: Budget[] }>()
);
export const changeBudgetFailure = createAction(
  '[Budget] change Budget Failure',
  props<{ error: any }>()
);
//delete budget
export const deleteBudget = createAction('[Budget] delete budget');
export const deleteBudgetSuccess = createAction(
  '[Budget] delete Budget Success',
  props<{ id: string }>()
);
export const deleteBudgetFailure = createAction(
  '[Budget] delete Budget Failure',
  props<{ error: any }>()
);
