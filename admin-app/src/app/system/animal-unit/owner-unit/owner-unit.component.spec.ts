import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerUnitComponent } from './owner-unit.component';

describe('OwnerUnitComponent', () => {
  let component: OwnerUnitComponent;
  let fixture: ComponentFixture<OwnerUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
