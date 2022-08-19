import {createAction, props} from '@ngrx/store'
import {TopHeader} from '../../interfaces'

export const invokeHeaderAPI = createAction(
  '[Header API] invoke header fetch api'
)

export const headerFetchAPISuccess = createAction(
  '[Header API] header fetch api success',
  props<{header: TopHeader}>()
)
