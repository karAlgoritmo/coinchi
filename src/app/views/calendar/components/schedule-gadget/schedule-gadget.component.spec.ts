import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGadgetComponent } from './schedule-gadget.component';

describe('ScheduleGadgetComponent', () => {
  let component: ScheduleGadgetComponent;
  let fixture: ComponentFixture<ScheduleGadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
