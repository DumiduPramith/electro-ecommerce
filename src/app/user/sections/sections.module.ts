import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CollectionSection} from './component/collection/collection.component'
import {SharedModule} from '../shared/shared.module'
import {CarouselModule} from 'ngx-owl-carousel-o'
import {HotDealsSection} from './component/hot-deals/hot-deals.component'
import {TopSellingFooterSection} from './component/top-selling-footer/top-selling-footer.component'
import {NewsletterSection} from './component/newsletter/newsletter.component'
import {ProductCarouselSection} from './component/product-carousel/product-carousel.component'

@NgModule({
  declarations: [
    CollectionSection,
    HotDealsSection,
    TopSellingFooterSection,
    NewsletterSection,
    ProductCarouselSection,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
  exports: [
    CollectionSection,
    ProductCarouselSection,
    HotDealsSection,
    TopSellingFooterSection,
    NewsletterSection,
  ],
})
export class SectionsModule {}
