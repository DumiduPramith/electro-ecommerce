import {ProductDetails} from '../../../interfaces/productDetails.interface'
import {CardItemInterface} from '../../../shared.interface'

export interface review {
  name: string
  date_time: string
  rate: number
  comment: string
}

export interface ProductInterface {
  product_details: ProductDetails
  related_products: {[key: number]: CardItemInterface}
}
