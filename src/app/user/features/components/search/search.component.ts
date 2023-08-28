import {Component, OnInit} from '@angular/core'
import {SharedModule} from 'src/app/user/shared/shared.module'

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [SharedModule],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
