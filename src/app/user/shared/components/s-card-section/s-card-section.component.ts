import {Component, Input, OnInit} from '@angular/core'
import {OwlOptions} from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-s-card-section',
  templateUrl: './s-card-section.component.html',
  styleUrls: ['./s-card-section.component.scss'],
})
export class SCardSectionComponent implements OnInit {
  @Input() section_name: string = 'section'

  customOptions: OwlOptions = {
    loop: true,
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
    },
  }
  constructor() {}

  ngOnInit(): void {}
}
