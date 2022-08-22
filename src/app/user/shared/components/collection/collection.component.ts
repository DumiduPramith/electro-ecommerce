import {Component, Input, OnInit} from '@angular/core'

interface props {
  name: string
  image: string
}

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() props: props = {name: '', image: ''}

  constructor() {}

  ngOnInit(): void {}
}
