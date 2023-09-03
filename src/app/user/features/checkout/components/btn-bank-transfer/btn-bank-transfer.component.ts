import {Component} from '@angular/core'

@Component({
  selector: 'app-btn-bank-transfer',
  templateUrl: './btn-bank-transfer.component.html',
  styleUrls: ['./btn-bank-transfer.component.scss'],
})
export class BtnBankTransferComponent {
  bankTransfer = false

  show() {
    console.log(this.bankTransfer)
  }

  onCheckedChange(val: any) {
    this.bankTransfer = val.target.value
  }
}
