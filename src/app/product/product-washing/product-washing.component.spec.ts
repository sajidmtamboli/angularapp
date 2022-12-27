import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWashingComponent } from './product-washing.component';

describe('ProductWashingComponent', () => {
  let component: ProductWashingComponent;
  let fixture: ComponentFixture<ProductWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
