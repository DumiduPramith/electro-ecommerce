import {Component, HostListener, OnInit} from '@angular/core'
import {NavigationService} from '../../services/navigation.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  Nav_items = {}
  selected: number = 0
  screen_width = 0
  constructor(private NavService: NavigationService) {}

  ngOnInit(): void {
    this.NavService.getNavbar().subscribe((data) => {
      this.Nav_items = data
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
