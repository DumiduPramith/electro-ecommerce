import {Component, HostListener, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {selectHeader} from '../../store/core.selector'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  Nav_items = {}
  selected: number = 0
  screen_width = 0

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectHeader).subscribe((data) => {
      this.Nav_items = data.navbar
    })

    this.screen_width = window.innerWidth
  }

  setIndex(index: number) {
    this.selected = index
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen_width = window.innerWidth
  }
}
