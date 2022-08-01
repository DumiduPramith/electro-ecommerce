import {Component, OnInit} from '@angular/core'
import {TopHeader} from '../../interfaces'
import {HeaderService} from '../../services/header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  phone = 0
  email = ''
  address = ''
  currency = ''
  ngOnInit() {
    this.headerService.getTopHeader().subscribe((data: TopHeader) => {
      this.phone = data.phone
      this.email = data.email
      this.address = data.address
    })
  }
}
