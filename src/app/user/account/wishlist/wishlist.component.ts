import {Component} from '@angular/core'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  item = {
    image: '/assets/img/product01.png',
    title: 'laptop',
    price: 152000.0,
    status: 'in stock',
  }
}
