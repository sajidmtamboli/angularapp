import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSuccefullComponent } from './warning-succefull.component';

describe('WarningSuccefullComponent', () => {
  let component: WarningSuccefullComponent;
  let fixture: ComponentFixture<WarningSuccefullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningSuccefullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSuccefullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
