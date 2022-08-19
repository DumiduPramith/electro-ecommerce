import {createAction, props} from '@ngrx/store'
import {Home} from '../../interfaces'

export const invokeHomeAPI = createAction('[Home API] invoke home api')

export const homeFetchAPISucess = createAction(
  '[Home API] home fetch api success',
  props<{allData: Home}>()
)

export const homeFetchAPIFail = createAction('[Home API] home fetch api fail')
