import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {TopHeader} from '../../interfaces'
import {HeaderService} from '../../services/header.service'
import {invokeHeaderAPI} from '../../store/core.actions'
import {selectHeader} from '../../store/core.selector'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService, private store: Store) {}

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
