import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhubComponent } from './mainhub.component';

describe('MainhubComponent', () => {
  let component: MainhubComponent;
  let fixture: ComponentFixture<MainhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
