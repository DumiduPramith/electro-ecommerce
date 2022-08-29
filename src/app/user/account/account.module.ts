import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AccountComponent} from './components/account/account.component'
import {CartComponent} from './components/cart/cart.component'
import {WishlistComponent} from './components/wishlist/wishlist.component'
import {TrackComponent} from './components/track/track.component';
import { CheckoutComponent } from './components/checkout/checkout.component'

@NgModule({
  declarations: [
    AccountComponent,
    CartComponent,
    WishlistComponent,
    TrackComponent,
    CheckoutComponent,
  ],
  imports: [CommonModule],
})
export class AccountModule {}
