import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {invokeHeaderAPI} from '../../store/actions/core.actions'
import {selectHeader} from '../../store/selectors/core.selector'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  phone = 0
  email = ''
  address = ''
  currency = ''
  categories = {}

  ngOnInit() {
    this.store.dispatch(invokeHeaderAPI())
    this.store.pipe(select(selectHeader)).subscribe((data) => {
      this.phone = data.phone
      this.email = data.email
      this.address = data.address
      this.currency = data.currency
      this.categories = data.categories
    })
  }
}
