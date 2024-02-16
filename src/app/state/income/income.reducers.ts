import { createReducer, on } from '@ngrx/store';
import * as IncomeActions from './income.actions';
import { Income } from 'src/app/models/income/income';

//how the State looks
export interface IncomeState {
  income: Income[];
  error: any;
}

//state of our app before any actions are made
export const initialState: IncomeState = {
  income: [],
  error: null,
};

export const incomeReducer = createReducer(
  initialState,
  //income load success
  on(IncomeActions.showIncomeSuccess, (state, { income }) => ({
    ...state,
    income: income,
    error: null,
  })),
  //income load failure
  on(IncomeActions.showIncomeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //income add success
  on(IncomeActions.addIncomeSuccess, (state, { income }) => ({
    ...state,
    income: [...state.income, income],
    error: null,
  })),
  //income add failure
  on(IncomeActions.addIncomeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //income changed success
  on(IncomeActions.changeIncomeSuccess, (state, { income }) => ({
    ...state,
    income: income,
    error: null,
  })),
  //income changed failure
  on(IncomeActions.changeIncomeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //income deleted success
  on(IncomeActions.deleteIncomeSuccess, (state, { id }) => ({
    ...state,
    income: state.income.filter((income) => income.id !== id),
    error: null,
  })),
  //income deleted failure
  on(IncomeActions.deleteIncomeFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
