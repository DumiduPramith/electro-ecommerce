import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ItemQuantityComponent} from './components/item-quantity/item-quantity.component'
import {TitleComponent} from './components/title/title.component'
import {CollectionCardComponent} from './components/collection/collection.component'

@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent,
    CollectionCardComponent,
  ],
  imports: [CommonModule],
  exports: [CollectionCardComponent],
})
export class SharedModule {}
