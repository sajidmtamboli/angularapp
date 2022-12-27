import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteroutlateComponent } from './routeroutlate.component';

describe('RouteroutlateComponent', () => {
  let component: RouteroutlateComponent;
  let fixture: ComponentFixture<RouteroutlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteroutlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteroutlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
