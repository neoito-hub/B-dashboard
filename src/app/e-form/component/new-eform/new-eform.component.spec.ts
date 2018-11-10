import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEformComponent } from './new-eform.component';

describe('NewEformComponent', () => {
  let component: NewEformComponent;
  let fixture: ComponentFixture<NewEformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
