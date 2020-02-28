import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentUnitComponent } from './resident-unit.component';

describe('ResidentUnitComponent', () => {
  let component: ResidentUnitComponent;
  let fixture: ComponentFixture<ResidentUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
