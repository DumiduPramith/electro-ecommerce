import {createReducer, on} from '@ngrx/store'
import {homeFetchAPISucess} from '../actions/home.actions'
import {homeinitialState} from '../state/home.state'

export const homeReducer = createReducer(
  homeinitialState,
  on(homeFetchAPISucess, (state, {allData}) => {
    return allData
  })
)
