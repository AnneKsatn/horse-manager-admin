import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegesComponent } from './maneges.component';

describe('ManegesComponent', () => {
  let component: ManegesComponent;
  let fixture: ComponentFixture<ManegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
