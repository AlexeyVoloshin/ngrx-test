import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { countActionsType, CountUpdatedAtAction } from '../reducers/count/count.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(
        countActionsType.increase,
        countActionsType.decrease,
        countActionsType.clear), // если сработает один из этих Action то выполнить функцию
        map(() => {
          return new CountUpdatedAtAction({
            updateAt: Date.now()
          });
        })// ловим Action из потока акшинов
    );
  }
}
