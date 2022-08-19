import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collectionData: {[key: string]: string} | undefined = {}
  constructor() {}

  ngOnInit(): void {}
}
