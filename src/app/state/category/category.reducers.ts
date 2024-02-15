import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.actions';
import { Category } from 'src/app/models/category/category';

//how the State looks
export interface State {
  category: Category[];
  error: any;
}

//state of our app before any actions are made
export const initialState: State = {
  category: [],
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  //categories loading success
  on(CategoryActions.showCategoriesSuccess, (state, { category }) => ({
    ...state,
    category: category,
    error: null,
  })),
  //categories loading failure
  on(CategoryActions.showCategoriesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //categories added success
  on(CategoryActions.addCategorySuccess, (state, { category }) => ({
    ...state,
    category: [...state.category, category],
    error: null,
  })),
  //categories added failure
  on(CategoryActions.addCategoryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //categories changed success
  //categories changed failure
  on(CategoryActions.changeCategoryFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  //categories deleted success
  on(CategoryActions.deleteCategorySuccess, (state, { id }) => ({
    ...state,
    category: state.category.filter((category) => category.id !== id),
    error: null,
  })),
  //categories deleted failure
  on(CategoryActions.deleteCategoryFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
