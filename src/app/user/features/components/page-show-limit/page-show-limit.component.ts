import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-page-show-limit',
  templateUrl: './page-show-limit.component.html',
  styleUrls: ['./page-show-limit.component.scss'],
})
export class PageShowLimitComponent {
  @Input({required: true}) limit: number[] = []
}
