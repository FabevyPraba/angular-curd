import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLecturesComponent } from './guest-lectures.component';

describe('GuestLecturesComponent', () => {
  let component: GuestLecturesComponent;
  let fixture: ComponentFixture<GuestLecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestLecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
