import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingFooterComponent } from './top-selling-footer.component';

describe('TopSellingFooterComponent', () => {
  let component: TopSellingFooterComponent;
  let fixture: ComponentFixture<TopSellingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellingFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
