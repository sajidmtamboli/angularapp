import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlaptopComponent } from './productlaptop.component';

describe('ProductlaptopComponent', () => {
  let component: ProductlaptopComponent;
  let fixture: ComponentFixture<ProductlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
