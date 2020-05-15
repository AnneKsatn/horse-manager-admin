import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentProcedureBaseComponent } from './resident-procedure-base.component';

describe('ResidentProcedureBaseComponent', () => {
  let component: ResidentProcedureBaseComponent;
  let fixture: ComponentFixture<ResidentProcedureBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentProcedureBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentProcedureBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
