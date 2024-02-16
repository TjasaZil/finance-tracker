// category.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryService } from '../../services/category/category.service'; // Update the path as necessary
import * as CategoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.showCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) =>
            CategoryActions.showCategoriesSuccess({ category: categories })
          ),
          catchError((error) =>
            of(CategoryActions.showCategoriesFailure({ error }))
          )
        )
      )
    )
  );

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.addCategory),
      mergeMap((action) =>
        this.categoryService.addCategory(action.category).pipe(
          map((category) => CategoryActions.addCategorySuccess({ category })),
          catchError((error) =>
            of(CategoryActions.addCategoryFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}
