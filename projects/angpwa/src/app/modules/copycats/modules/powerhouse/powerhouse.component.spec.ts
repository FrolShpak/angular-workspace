import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerhouseComponent } from './powerhouse.component';

describe('PowerhouseComponent', () => {
  let component: PowerhouseComponent;
  let fixture: ComponentFixture<PowerhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
