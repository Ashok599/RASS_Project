import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicethreeComponent } from './servicethree.component';

describe('ServicethreeComponent', () => {
  let component: ServicethreeComponent;
  let fixture: ComponentFixture<ServicethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
