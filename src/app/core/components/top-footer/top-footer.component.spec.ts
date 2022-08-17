import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFooterComponent } from './top-footer.component';

describe('TopFooterComponent', () => {
  let component: TopFooterComponent;
  let fixture: ComponentFixture<TopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
