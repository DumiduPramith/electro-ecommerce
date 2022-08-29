import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CollectionSection} from './components/collection/collection.component'
import {SharedModule} from '../shared/shared.module'
import {CarouselModule} from 'ngx-owl-carousel-o'
import {HotDealsSection} from './components/hot-deals/hot-deals.component'
import {TopSellingFooterSection} from './components/top-selling-footer/top-selling-footer.component'
import {NewsletterSection} from './components/newsletter/newsletter.component'
import {ProductCarouselSectionComponent} from './components/product-carousel/product-carousel.component'

@NgModule({
  declarations: [
    CollectionSection,
    HotDealsSection,
    TopSellingFooterSection,
    NewsletterSection,
    ProductCarouselSectionComponent,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
  exports: [
    CollectionSection,
    ProductCarouselSectionComponent,
    HotDealsSection,
    TopSellingFooterSection,
    NewsletterSection,
  ],
})
export class SectionsModule {}
