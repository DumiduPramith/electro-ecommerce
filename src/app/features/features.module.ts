import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { ReturnsComponent } from './component/returns/returns.component';
import { TermsComponent } from './component/terms/terms.component';
import { HelpComponent } from './component/help/help.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    ReturnsComponent,
    TermsComponent,
    HelpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
