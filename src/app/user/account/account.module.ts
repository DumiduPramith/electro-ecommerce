import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './component/account/account.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { TrackComponent } from './component/track/track.component';



@NgModule({
  declarations: [
    AccountComponent,
    CartComponent,
    WishlistComponent,
    TrackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
