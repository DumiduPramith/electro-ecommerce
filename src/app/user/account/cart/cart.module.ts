import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CartComponent} from './cart.component'
import {ItemCardComponent} from './shared/components/item-card/item-card.component'
import {ValidatePromoComponent} from './features/components/validate-promo/validate-promo.component'
import {RemoveBtnComponent} from './shared/components/remove-btn/remove-btn.component'
import {MoveWishlistBtnComponent} from './shared/components/move-wishlist-btn/move-wishlist-btn.component'
import {RouterModule, Routes} from '@angular/router'
import {MatIconModule} from '@angular/material/icon'

const routes: Routes = [{path: '', component: CartComponent}]

@NgModule({
  declarations: [
    CartComponent,
    ItemCardComponent,
    ValidatePromoComponent,
    RemoveBtnComponent,
    MoveWishlistBtnComponent,
  ],
  imports: [CommonModule, MatIconModule, RouterModule.forChild(routes)],
})
export class CartModule {}
