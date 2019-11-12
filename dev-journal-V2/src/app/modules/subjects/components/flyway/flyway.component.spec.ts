import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlywayComponent } from './flyway.component';

describe('FlywayComponent', () => {
  let component: FlywayComponent;
  let fixture: ComponentFixture<FlywayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlywayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlywayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
