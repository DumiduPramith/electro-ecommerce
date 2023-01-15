import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {SharedModule} from '../../shared.module'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  selectedTab = 3
  ngOnInit(): void {}

  setTab(id: number) {
    this.selectedTab = id
  }
}
