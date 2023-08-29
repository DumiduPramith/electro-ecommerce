import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
})
export class SortByComponent {
  @Input({required: true}) options = {}
}
