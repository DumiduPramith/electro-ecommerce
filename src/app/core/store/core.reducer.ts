import {createReducer, on} from '@ngrx/store'
import {TopHeader} from '../interfaces'
import {headerFetchAPISuccess} from './core.actions'

export const initialState: TopHeader = {
  phone: 0,
  email: '',
  address: '',
  currency: '',
  categories: {},
  navbar: {},
}

export const headerReducer = createReducer(
  initialState,
  on(headerFetchAPISuccess, (state, {header}) => {
    return header
  })
)
