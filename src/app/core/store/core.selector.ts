import {TopHeader} from './../interfaces'
import {createFeatureSelector} from '@ngrx/store'

export const selectHeader = createFeatureSelector<TopHeader>('top-header')
