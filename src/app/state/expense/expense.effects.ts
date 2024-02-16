import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import * as ExpenseActions from './expense.actions';

@Injectable()
export class ExpenseEffects {
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.showExpenses),
      mergeMap(() =>
        this.expenseService.getExpenses().pipe(
          map((expenses) =>
            ExpenseActions.showExpensesSuccess({ expense: expenses })
          ),
          catchError((error) =>
            of(ExpenseActions.showExpensesFailure({ error }))
          )
        )
      )
    )
  );

  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.addExpense),
      mergeMap((action) =>
        this.expenseService.addExpense(action.expense).pipe(
          map((expense) =>
            ExpenseActions.addExpenseSuccess({
              expense,
            })
          ),
          catchError((error) => of(ExpenseActions.addExpenseFailure({ error })))
        )
      )
    )
  );
  deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.deleteExpense),
      mergeMap((action) =>
        this.expenseService.deleteExpense(action.id).pipe(
          map(() => ExpenseActions.deleteExpenseSuccess({ id: action.id })),
          catchError((error) =>
            of(ExpenseActions.deleteExpenseFailure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}
}
