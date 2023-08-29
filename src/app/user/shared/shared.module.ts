import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ItemQuantityComponent} from './components/item-quantity/item-quantity.component'
import {TitleComponent} from './components/title/title.component'
import {CollectionCardComponent} from './components/collection/collection.component'
import {ProductCardComponent} from './components/product-card/product-card.component'
import {SmallProductCardComponent} from './components/small-product-card/small-product-card.component'
import {SCardSectionComponent} from './components/s-card-section/s-card-section.component'
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component'

import {CarouselModule} from 'ngx-owl-carousel-o'
import {MatSliderModule} from '@angular/material/slider'

import {GalleryCarouselComponent} from './components/gallery-carousel/gallery-carousel.component'
import {NgxImageZoomComponent} from './components/ngx-image-zoom/ngx-image-zoom.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {ProductTabComponent} from './components/product-tab/product-tab.component'
import {AddWishlistComponent} from './components/product/add-wishlist/add-wishlist.component'
import {AddCompareComponent} from './components/product/add-compare/add-compare.component'
import {AddCartComponent} from './components/product/add-cart/add-cart.component'
import {ReviewPaginationComponent} from './components/review-pagination/review-pagination.component'
import {ReviewsComponent} from './components/reviews/reviews.component'
import {TickFilterComponent} from './components/tick-filter/tick-filter.component'
import {PriceFilterComponent} from './components/price-filter/price-filter.component'

@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent,
    CollectionCardComponent,
    ProductCardComponent,
    AddCartComponent,
    SmallProductCardComponent,
    SCardSectionComponent,
    BreadcrumbComponent,
    GalleryCarouselComponent,
    NgxImageZoomComponent,
    ProductDetailsComponent,
    ProductTabComponent,
    AddWishlistComponent,
    AddCompareComponent,

    ReviewPaginationComponent,
    ReviewsComponent,
    TickFilterComponent,
    PriceFilterComponent,
  ],
  imports: [CommonModule, CarouselModule, MatSliderModule],
  exports: [
    CollectionCardComponent,
    ProductCardComponent,
    SCardSectionComponent,
    BreadcrumbComponent,
    GalleryCarouselComponent,
    ProductDetailsComponent,
    ReviewsComponent,
    ReviewPaginationComponent,
    TickFilterComponent,
    PriceFilterComponent,
  ],
})
export class SharedModule {}
