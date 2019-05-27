import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityPolicyComponent } from './quality-policy.component';

describe('QualityPolicyComponent', () => {
  let component: QualityPolicyComponent;
  let fixture: ComponentFixture<QualityPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
