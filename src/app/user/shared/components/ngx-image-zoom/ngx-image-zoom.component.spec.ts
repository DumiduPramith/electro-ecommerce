import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageZoomComponent } from './ngx-image-zoom.component';

describe('NgxImageZoomComponent', () => {
  let component: NgxImageZoomComponent;
  let fixture: ComponentFixture<NgxImageZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxImageZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
