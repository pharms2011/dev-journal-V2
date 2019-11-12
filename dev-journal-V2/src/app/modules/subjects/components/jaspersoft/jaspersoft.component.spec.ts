import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaspersoftComponent } from './jaspersoft.component';

describe('JaspersoftComponent', () => {
  let component: JaspersoftComponent;
  let fixture: ComponentFixture<JaspersoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaspersoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaspersoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
