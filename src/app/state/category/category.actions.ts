import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/models/category/category';

//add category, show category, change category, delete category, all success and faliure

//add category
export const addCategory = createAction(
  '[Category] add Category',
  props<{ category: Category }>
);
export const addCategorySuccess = createAction(
  '[Category] add Category Success',
  props<{ category: Category }>()
);
export const addCategoryFailure = createAction(
  '[Category] add Category Failure',
  props<{ error: any }>()
);

//show categories
export const showCategories = createAction('[Category] load Category');
export const showCategoriesSuccess = createAction(
  '[Category] show Categories Success',
  props<{ category: Category[] }>()
);
export const showCategoriesFailure = createAction(
  '[Category] show Category Failure',
  props<{ error: any }>()
);

//change category
export const changeCategory = createAction('[Category] change Category');
//export const changeCategorySuccess=createAction();
export const changeCategoryFailure = createAction(
  '[Category] change Category Failure',
  props<{ error: any }>()
);

//delete category
export const deleteCategory = createAction(
  '[Category] delete Category'
  // props<{ id: string }>()
);
export const deleteCategorySuccess = createAction(
  '[Category] delete Category Success',
  props<{ id: string }>()
);
export const deleteCategoryFailure = createAction(
  '[Category] delete category Failure',
  props<{ error: any }>()
);
