import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HomeRoutingModule} from './home-routing.module'
import {StoreModule} from '@ngrx/store'
import {homeReducer} from './store/reducers/home.reducers'
import {EffectsModule} from '@ngrx/effects'
import {HomeEffects} from './store/effects/home.effects'
import {SectionsModule} from '../../sections/sections.module'
import {HomeComponent} from './home.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SectionsModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
