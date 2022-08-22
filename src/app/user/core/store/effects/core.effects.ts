import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, EMPTY, map, switchMap} from 'rxjs'
import {HeaderService} from '../../services/header.service'
import {headerFetchAPISuccess, invokeHeaderAPI} from '../actions/core.actions'

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private headerService: HeaderService
  ) {}

  loadHeaderData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeHeaderAPI),
      switchMap(() => {
        return this.headerService
          .getTopHeader()
          .pipe(map((data) => headerFetchAPISuccess({header: data})))
      })
    )
  )
}
