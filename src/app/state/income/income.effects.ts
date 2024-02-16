import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IncomeService } from '../../services/income/income.service'; // Update the path as necessary
import * as IncomeActions from './income.actions';

@Injectable()
export class IncomeEffects {
  loadIncomes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeActions.showIncome),
      mergeMap(() =>
        this.incomeService.getIncomes().pipe(
          map((income) => IncomeActions.showIncomeSuccess({ income: income })),
          catchError((error) => of(IncomeActions.showIncomeFailure({ error })))
        )
      )
    )
  );

  addIncome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeActions.addIncome),
      mergeMap((action) =>
        this.incomeService.addIncome(action.income).pipe(
          map((income) => IncomeActions.addIncomeSuccess({ income })),
          catchError((error) => of(IncomeActions.addIncomeFailure({ error })))
        )
      )
    )
  );
  deleteIncome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeActions.deleteIncome),
      mergeMap((action) =>
        this.incomeService.deleteIncome(action.id).pipe(
          map(() => IncomeActions.deleteIncomeSuccess({ id: action.id })),
          catchError((error) =>
            of(IncomeActions.deleteIncomeFailure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private incomeService: IncomeService
  ) {}
}
