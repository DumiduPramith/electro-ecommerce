export interface CardInterface {
  new_products: boolean
  new_product_items?: {[key: number]: CardItemInterface}
}

export interface CardItemInterface {
  product_id?: number
  product_img: string
  category: string
  product_name: string
  product_price: number
  old_price?: number
  stars?: number
}
