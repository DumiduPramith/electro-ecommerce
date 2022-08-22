import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ItemQuantityComponent} from './components/item-quantity/item-quantity.component'
import {TitleComponent} from './components/title/title.component'
import {CollectionCardComponent} from './components/collection/collection.component'
import {ProductCardComponent} from './components/product-card/product-card.component'
import {AddCartComponent} from './components/card/add-cart/add-cart.component'
import {SmallProductCardComponent} from './components/small-product-card/small-product-card.component'
import {SCardSectionComponent} from './components/s-card-section/s-card-section.component'
import {CarouselModule} from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent,
    CollectionCardComponent,
    ProductCardComponent,
    AddCartComponent,
    SmallProductCardComponent,
    SCardSectionComponent,
  ],
  imports: [CommonModule, CarouselModule],
  exports: [
    CollectionCardComponent,
    ProductCardComponent,
    SCardSectionComponent,
  ],
})
export class SharedModule {}
