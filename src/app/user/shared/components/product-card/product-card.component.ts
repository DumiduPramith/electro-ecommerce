import {Component, Input, OnInit} from '@angular/core'
import {CardItemInterface} from '../../shared.interface'
import {cardDefault} from '../../defaultData/card.default'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input({required: true}) product_data: CardItemInterface = cardDefault

  constructor() {}

  hover = false

  ngOnInit(): void {}
}
