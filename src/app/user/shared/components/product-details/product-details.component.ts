import {Component, Input, OnInit} from '@angular/core'
import {ProductDetails} from '../../interfaces/productDetails.interface'
import {product_details} from '../../defaultData/product.default'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: ProductDetails = product_details

  constructor() {}

  ngOnInit(): void {}
}
