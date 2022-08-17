import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ItemQuantityComponent} from './components/item-quantity/item-quantity.component'
import {TitleComponent} from './components/title/title.component'
import {CollectionComponent} from './components/collection/collection.component'

@NgModule({
  declarations: [ItemQuantityComponent, TitleComponent, CollectionComponent],
  imports: [CommonModule],
  exports: [CollectionComponent],
})
export class SharedModule {}
