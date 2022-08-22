import {Component, Input, OnInit} from '@angular/core'
import {CardItemInterface} from '../../shared.interface'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product_data: CardItemInterface = {
    product_img: '',
    category: '',
    product_name: '',
    product_price: 0,
  }

  constructor() {}

  hover = false

  ngOnInit(): void {}
}
