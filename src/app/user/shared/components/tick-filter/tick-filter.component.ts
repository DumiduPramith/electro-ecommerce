import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-tick-filter',
  templateUrl: './tick-filter.component.html',
  styleUrls: ['./tick-filter.component.scss'],
})
export class TickFilterComponent implements OnInit {
  @Input({required: true}) categoryName: string = ''
  @Input({required: true}) categoryItems: number = 0

  constructor() {}

  ngOnInit(): void {}
}
