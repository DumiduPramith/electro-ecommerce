import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCardSectionComponent } from './s-card-section.component';

describe('SCardSectionComponent', () => {
  let component: SCardSectionComponent;
  let fixture: ComponentFixture<SCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
