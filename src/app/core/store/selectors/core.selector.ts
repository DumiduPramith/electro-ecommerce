import {createFeatureSelector} from '@ngrx/store'
import {TopHeader} from '../../interfaces'

export const selectHeader = createFeatureSelector<TopHeader>('top-header')
