import {createReducer, on} from '@ngrx/store'

import {headerFetchAPISuccess} from '../actions/core.actions'

export interface TopHeader {
  phone: number
  email: string
  address: string
  currency: string
  categories: {
    [key: number]: string
  }
  navbar: {
    [key: number]: string
  }
}

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
