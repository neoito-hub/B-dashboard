import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormListComponent } from './e-form-list.component';

describe('EFormListComponent', () => {
  let component: EFormListComponent;
  let fixture: ComponentFixture<EFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
