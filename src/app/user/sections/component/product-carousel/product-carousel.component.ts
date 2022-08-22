import {Component, Input, OnInit} from '@angular/core'
import {OwlOptions} from 'ngx-owl-carousel-o'
import {CardItemInterface} from 'src/app/user/shared/shared.interface'

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselSection implements OnInit {
  @Input() products: {[key: number]: CardItemInterface} = {}
  @Input() section_name: string = 'section'

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  }
  constructor() {}

  ngOnInit(): void {}
}
