import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmonthlymodulesGadgetComponent } from './planmonthlymodules-gadget.component';

describe('PlanmonthlymodulesGadgetComponent', () => {
  let component: PlanmonthlymodulesGadgetComponent;
  let fixture: ComponentFixture<PlanmonthlymodulesGadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanmonthlymodulesGadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanmonthlymodulesGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
