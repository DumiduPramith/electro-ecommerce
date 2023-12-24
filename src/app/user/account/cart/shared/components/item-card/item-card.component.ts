import {Component} from '@angular/core'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  item = {
    image: '/assets/img/product01.png',
    title: 'Plain Shirt & Buttoned Skirt',
    color: 'OLIVE/MULTI',
    size: 'S',
    price: 39.99,
    status: 'In Stock',
  }
}
