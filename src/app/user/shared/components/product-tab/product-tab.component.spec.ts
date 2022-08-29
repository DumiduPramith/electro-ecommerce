import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabComponent } from './product-tab.component';

describe('ProductTabComponent', () => {
  let component: ProductTabComponent;
  let fixture: ComponentFixture<ProductTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
