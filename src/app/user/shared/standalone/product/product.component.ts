import {CommonModule} from '@angular/common'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {SharedModule} from '../../shared.module'
import {ProductService} from './services/product.service'
import {Subscription} from 'rxjs'
import {product_details} from '../../defaultData/product.default'
import {ProductInterface} from './model'
import {cardDefault} from '../../defaultData/card.default'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  // @ts-ignore
  productDetailsSubscription: Subscription
  constructor(private fetchProductDetails: ProductService) {}
  selectedTab = 3
  productData: ProductInterface = {
    product_details: product_details,
    related_products: {0: cardDefault},
  }
  ngOnInit(): void {
    this.productDetailsSubscription = this.fetchProductDetails
      .fetchDetails(10)
      .subscribe((data) => {
        this.productData = data
      })
  }

  ngOnDestroy() {
    if (this.productDetailsSubscription) {
      this.productDetailsSubscription.unsubscribe()
    }
  }

  setTab(id: number) {
    this.selectedTab = id
  }
}
