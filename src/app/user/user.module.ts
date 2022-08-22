import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {UserRoutingModule} from './user-routing.module'
import {CoreModule} from './core/core.module'
import {FeaturesModule} from './features/features.module'
import {UserComponent} from './user.component'

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, CoreModule, FeaturesModule],
})
export class UserModule {}
