import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ErrorComponent} from './components/error/error.component'
import {HeaderComponent} from './components/header/header.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {NavigationComponent} from './components/navigation/navigation.component'
import {FooterComponent} from './components/footer/footer.component'
import {TopFooterComponent} from './components/top-footer/top-footer.component'

@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    TopFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavigationComponent,
    TopFooterComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
