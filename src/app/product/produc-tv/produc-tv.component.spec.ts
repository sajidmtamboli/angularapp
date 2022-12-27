import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducTvComponent } from './produc-tv.component';

describe('ProducTvComponent', () => {
  let component: ProducTvComponent;
  let fixture: ComponentFixture<ProducTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
