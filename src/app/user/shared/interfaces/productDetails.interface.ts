export interface ProductDetails {
  productId: number
  productName: string
  productRating: number
  productReviews: number
  productPrice: number
  productOldPrice?: number
  productAvailable: boolean
  productOptions?: {
    [key: string]: {
      [key: number | string]: string
    }
  }
  productQty: number
  productCategory: {
    [key: number]: {
      categoryName: string
      categoryUrl: string
    }
  }
}
