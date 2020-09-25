import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyPolicyComponent } from './safety-policy.component';

describe('SafetyPolicyComponent', () => {
  let component: SafetyPolicyComponent;
  let fixture: ComponentFixture<SafetyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
