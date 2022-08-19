import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HomeComponent} from './components/home/home.component'
import {SectionsModule} from 'src/app/sections/sections.module'
import {HomeRoutingModule} from './home-routing.module'
import {StoreModule} from '@ngrx/store'
import {homeReducer} from './store/reducers/home.reducers'
import {EffectsModule} from '@ngrx/effects'
import {HomeEffects} from './store/effects/home.effects'

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
