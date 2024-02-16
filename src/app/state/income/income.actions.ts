import { createAction, props } from '@ngrx/store';
import { Income } from 'src/app/models/income/income';

//add income, show income, change income, delete income, all success and faliure

//add income
export const addIncome = createAction(
  '[Income] add Income',
  props<{ income: Income }>()
);
export const addIncomeSuccess = createAction(
  '[Income] add Income Success',
  props<{ income: Income }>()
);
export const addIncomeFailure = createAction(
  '[Income] add Income Failure',
  props<{ error: any }>()
);

//show income
export const showIncome = createAction('[Income] load Income');
export const showIncomeSuccess = createAction(
  '[Income] show Income Success',
  props<{ income: Income[] }>()
);
export const showIncomeFailure = createAction(
  '[Income] show Income Failure',
  props<{ error: any }>()
);

//change income
export const changeIncome = createAction('[Income] change Income');
export const changeIncomeSuccess = createAction(
  '[Income] change Income Success',
  props<{ income: Income[] }>()
);
export const changeIncomeFailure = createAction(
  '[Income] change Income Failure',
  props<{ error: any }>()
);

//delete income
export const deleteIncome = createAction(
  '[Income] delete Income',
  props<{ id: string }>()
);
export const deleteIncomeSuccess = createAction(
  '[Income] delete Income Success',
  props<{ id: string }>()
);
export const deleteIncomeFailure = createAction(
  '[Income] delete Income failure',
  props<{ error: any }>()
);
