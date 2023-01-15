import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('reviews ran')
  }

  ratingStar(rating: number) {
    let rounded_value = -Math.round(-rating)
    let arr = []
    for (let count = 1; count <= rounded_value; count++) {
      arr.push(count)
    }
    console.log('ran')
    return arr
  }

  get numberArray() {
    let arr = []
    let times = 5
    for (let count = 1; count <= times; count++) {
      arr.push(count)
    }
    return arr.reverse()
  }
}
