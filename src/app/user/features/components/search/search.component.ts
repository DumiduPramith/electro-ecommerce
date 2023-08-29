import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {FeaturesModule} from '../../features.module'
import {SharedModule} from 'src/app/user/shared/shared.module'
import {CardItemInterface} from 'src/app/user/shared/shared.interface'
import {ProductData} from 'src/app/user/DataApi/product.data'

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [CommonModule, FeaturesModule, SharedModule],
})
export class SearchComponent implements OnInit {
  options = {0: 'position', 1: 'Popular'}
  limit = [20, 30]
  data: CardItemInterface = ProductData.related_products[0]

  constructor() {}

  ngOnInit(): void {}
}
