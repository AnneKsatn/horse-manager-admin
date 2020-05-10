import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseProfileComponent } from './horse-profile.component';

describe('HorseProfileComponent', () => {
  let component: HorseProfileComponent;
  let fixture: ComponentFixture<HorseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
