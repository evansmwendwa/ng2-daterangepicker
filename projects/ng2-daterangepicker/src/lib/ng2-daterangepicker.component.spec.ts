import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangepickerComponent } from './ng2-daterangepicker.component';

describe('Ng2DaterangepickerComponent', () => {
  let component: DaterangepickerComponent;
  let fixture: ComponentFixture<DaterangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaterangepickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
