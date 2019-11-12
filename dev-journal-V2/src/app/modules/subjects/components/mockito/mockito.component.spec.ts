import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockitoComponent } from './mockito.component';

describe('MockitoComponent', () => {
  let component: MockitoComponent;
  let fixture: ComponentFixture<MockitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
