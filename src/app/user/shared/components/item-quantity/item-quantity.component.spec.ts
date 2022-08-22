import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuantityComponent } from './item-quantity.component';

describe('ItemQuantityComponent', () => {
  let component: ItemQuantityComponent;
  let fixture: ComponentFixture<ItemQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
