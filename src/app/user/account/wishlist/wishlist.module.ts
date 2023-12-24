import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {WishlistComponent} from './wishlist.component'
import {RouterModule, Routes} from '@angular/router'
import {MatIconModule} from '@angular/material/icon'

const routes: Routes = [{path: '', component: WishlistComponent}]

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, MatIconModule, RouterModule.forChild(routes)],
})
export class WishlistModule {}
