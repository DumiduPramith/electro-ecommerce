import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
