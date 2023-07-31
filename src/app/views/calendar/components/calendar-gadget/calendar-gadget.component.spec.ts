import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGadgetComponent } from './calendar-gadget.component';

describe('CalendarGadgetComponent', () => {
  let component: CalendarGadgetComponent;
  let fixture: ComponentFixture<CalendarGadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarGadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
