import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisComponent } from './practis.component';

describe('PractisComponent', () => {
  let component: PractisComponent;
  let fixture: ComponentFixture<PractisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
