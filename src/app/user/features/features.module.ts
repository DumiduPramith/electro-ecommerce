import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {PrivacyComponent} from './components/privacy/privacy.component'
import {ReturnsComponent} from './components/returns/returns.component'
import {TermsComponent} from './components/terms/terms.component'
import {HelpComponent} from './components/help/help.component'

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    ReturnsComponent,
    TermsComponent,
    HelpComponent,
  ],
  imports: [CommonModule],
})
export class FeaturesModule {}
