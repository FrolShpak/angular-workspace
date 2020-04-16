import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopycatsComponent } from './copycats.component';

describe('CopycatsComponent', () => {
  let component: CopycatsComponent;
  let fixture: ComponentFixture<CopycatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopycatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopycatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
