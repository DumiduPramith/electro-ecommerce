import {CardInterface} from '../../shared/shared.interface'

export interface Home extends CardInterface {
  collection: boolean
  collection_items?: {[key: string]: string}
}
