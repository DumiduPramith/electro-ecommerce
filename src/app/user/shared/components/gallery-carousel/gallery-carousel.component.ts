import {Component, OnInit, ViewChild} from '@angular/core'
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss'],
})
export class GalleryCarouselComponent implements OnInit {
  @ViewChild('owlCar', {static: false}) owlCar: any
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    responsive: {
      0: {
        items: 3,
      },
    },
  }

  constructor() {}
  images = [
    '/assets/img/product08.png',
    '/assets/img/product01.png',
    '/assets/img/product03.png',
    '/assets/img/product06.png',
  ]

  ngOnInit(): void {}

  activeImg = 1

  getData(data: SlidesOutputData) {
    console.log(data)
    this.next(data)
  }

  next(data: SlidesOutputData) {
    let len = data.slides?.length
    this.activeImg = data.startPosition! + 1
    if (len === data.startPosition) {
      this.activeImg = 0
    }
  }

  setId(index: number): string {
    return 'owl-slide-' + index
  }

  changeImg(index: number) {
    let length = this.images.length
    if (index === 0) {
      this.owlCar.to('owl-slide-' + (length - 1))
    } else {
      this.owlCar.to('owl-slide-' + (index - 1))
    }
  }
}
