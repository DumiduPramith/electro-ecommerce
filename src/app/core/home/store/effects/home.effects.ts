import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {map, switchMap} from 'rxjs'
import {HomeService} from '../../services/home.service'
import {homeFetchAPISucess, invokeHomeAPI} from '../actions/home.actions'

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  loadHomeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeHomeAPI),
      switchMap(() => {
        return this.homeService.getHomeData().pipe(
          map((data) => {
            console.log(data)
            return homeFetchAPISucess({allData: data})
          })
        )
      })
    )
  )
}
