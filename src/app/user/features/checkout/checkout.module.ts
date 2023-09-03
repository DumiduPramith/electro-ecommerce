import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CheckoutComponent} from './checkout.component'
import {BillingAddressComponent} from './components/billing-address/billing-address.component'
import {OrderDetailsComponent} from './components/order-details/order-details.component'
import {RouterModule, Routes} from '@angular/router'
import {BtnBankTransferComponent} from './components/btn-bank-transfer/btn-bank-transfer.component'
import {FormsModule} from '@angular/forms'

const routes: Routes = [{path: '', component: CheckoutComponent}]

@NgModule({
  declarations: [
    CheckoutComponent,
    BillingAddressComponent,
    OrderDetailsComponent,
    BtnBankTransferComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class CheckoutModule {}
