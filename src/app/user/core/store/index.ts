import {selectHeader} from './selectors/core.selector'
import {createFeatureSelector} from '@ngrx/store'
import {headerReducer} from './reducers/core.reducer'

export const reducers = {
  header: headerReducer,
}
