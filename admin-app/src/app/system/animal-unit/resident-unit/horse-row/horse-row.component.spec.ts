import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseRowComponent } from './horse-row.component';

describe('HorseRowComponent', () => {
  let component: HorseRowComponent;
  let fixture: ComponentFixture<HorseRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
