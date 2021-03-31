import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestclientdetailComponent } from './restclientdetail.component';

describe('RestclientdetailComponent', () => {
  let component: RestclientdetailComponent;
  let fixture: ComponentFixture<RestclientdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestclientdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestclientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
