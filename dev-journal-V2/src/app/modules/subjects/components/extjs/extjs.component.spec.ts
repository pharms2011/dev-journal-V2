import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtjsComponent } from './extjs.component';

describe('ExtjsComponent', () => {
  let component: ExtjsComponent;
  let fixture: ComponentFixture<ExtjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
