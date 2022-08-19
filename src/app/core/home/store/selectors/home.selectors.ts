import {createFeatureSelector} from '@ngrx/store'
import {Home} from '../../interfaces'

export const selectHome = createFeatureSelector<Home>('home')
