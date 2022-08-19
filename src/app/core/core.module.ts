import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ErrorComponent} from './components/error/error.component'
import {HeaderComponent} from './components/header/header.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {NavigationComponent} from './components/navigation/navigation.component'
import {FooterComponent} from './components/footer/footer.component'
import {TopFooterComponent} from './components/top-footer/top-footer.component'
import {StoreModule} from '@ngrx/store'
import {headerReducer} from './store/reducers/core.reducer'
import {EffectsModule} from '@ngrx/effects'
import {CoreEffects} from './store/effects/core.effects'
import {LimiterPipe} from './pipes/footer/limiter.pipe'
import {SharedModule} from '../shared/shared.module'
import {SectionsModule} from '../sections/sections.module'
import {HomeModule} from './home/home.module'

@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    TopFooterComponent,
    LimiterPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule,
    StoreModule.forFeature('top-header', headerReducer),
    EffectsModule.forFeature([CoreEffects]),
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    TopFooterComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
