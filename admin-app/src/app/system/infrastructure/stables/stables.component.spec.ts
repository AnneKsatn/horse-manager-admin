import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StablesComponent } from './stables.component';

describe('StablesComponent', () => {
  let component: StablesComponent;
  let fixture: ComponentFixture<StablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
