import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmonthlyGadgetComponent } from './planmonthly-gadget.component';

describe('PlanmonthlyGadgetComponent', () => {
  let component: PlanmonthlyGadgetComponent;
  let fixture: ComponentFixture<PlanmonthlyGadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanmonthlyGadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanmonthlyGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
