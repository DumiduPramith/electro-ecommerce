import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {selectHeader} from '../../store/selectors/core.selector'

@Component({
  selector: 'app-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss'],
})
export class TopFooterComponent implements OnInit {
  constructor(private store: Store) {}

  phone = 0
  email = ''
  address = ''
  currency = ''
  navbar = {}

  ngOnInit(): void {
    this.store.select(selectHeader).subscribe((data) => {
      this.phone = data.phone
      this.email = data.email
      this.address = data.address
      this.currency = data.currency
      this.navbar = data.navbar
    })
  }
}
