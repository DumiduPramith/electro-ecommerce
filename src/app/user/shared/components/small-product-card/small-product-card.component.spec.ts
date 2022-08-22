import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProductCardComponent } from './small-product-card.component';

describe('SmallProductCardComponent', () => {
  let component: SmallProductCardComponent;
  let fixture: ComponentFixture<SmallProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
