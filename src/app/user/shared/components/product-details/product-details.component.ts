import {Component, Input, OnInit} from '@angular/core'

interface product {
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

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: product = {
    productId: 10,
    productName: 'Product Name',
    productRating: 4,
    productReviews: 6,
    productPrice: 600,
    productOldPrice: 100,
    productAvailable: true,
    productOptions: {
      size: {
        0: 'S',
        1: 'M',
      },
      color: {
        0: 'Red',
        1: 'Green',
      },
    },
    productQty: 2,
    productCategory: {
      0: {
        categoryName: 'headphone',
        categoryUrl: 'someurl',
      },
      1: {
        categoryName: 'accessories',
        categoryUrl: 'someurl',
      },
    },
  }

  constructor() {}

  ngOnInit(): void {}
}
