import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CollectionComponent} from './component/collection/collection.component'
import {NewProductComponent} from './component/new-product/new-product.component'
import {HotDealsComponent} from './component/hot-deals/hot-deals.component'
import {TopSellingComponent} from './component/top-selling/top-selling.component'
import {TopSellingFooterComponent} from './component/top-selling-footer/top-selling-footer.component'
import {NewsletterComponent} from './component/newsletter/newsletter.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    CollectionComponent,
    NewProductComponent,
    HotDealsComponent,
    TopSellingComponent,
    TopSellingFooterComponent,
    NewsletterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CollectionComponent],
})
export class SectionsModule {}
