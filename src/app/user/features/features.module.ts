import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {PrivacyComponent} from './components/privacy/privacy.component'
import {ReturnsComponent} from './components/returns/returns.component'
import {TermsComponent} from './components/terms/terms.component'
import {HelpComponent} from './components/help/help.component'
import {SortByComponent} from './components/sort-by/sort-by.component'
import {PageShowLimitComponent} from './components/page-show-limit/page-show-limit.component'
import {FilterComponent} from './components/filter/filter.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    ReturnsComponent,
    TermsComponent,
    HelpComponent,
    SortByComponent,
    PageShowLimitComponent,
    FilterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [FilterComponent, SortByComponent, PageShowLimitComponent],
})
export class FeaturesModule {}
