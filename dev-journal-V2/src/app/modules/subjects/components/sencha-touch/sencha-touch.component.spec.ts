import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenchaTouchComponent } from './sencha-touch.component';

describe('SenchaTouchComponent', () => {
  let component: SenchaTouchComponent;
  let fixture: ComponentFixture<SenchaTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenchaTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenchaTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
