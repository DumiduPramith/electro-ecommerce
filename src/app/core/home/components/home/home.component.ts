import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Home} from '../../interfaces'
import {invokeHomeAPI} from '../../store/actions/home.actions'
import {selectHome} from '../../store/selectors/home.selectors'
import {homeinitialState} from '../../store/state/home.state'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  rawServiceData: Home = homeinitialState

  ngOnInit(): void {
    this.store.dispatch(invokeHomeAPI())
    this.store.select(selectHome).subscribe((data) => {
      this.rawServiceData = data
      console.log(data)
    })
  }
}
