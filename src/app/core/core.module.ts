import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ErrorComponent} from './components/error/error.component'
import {HeaderComponent} from './components/header/header.component'
import {NotFoundComponent} from './components/not-found/not-found.component'

@NgModule({
  declarations: [ErrorComponent, HeaderComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
