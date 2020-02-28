import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalUnitComponent } from './animal-unit.component';

describe('AnimalUnitComponent', () => {
  let component: AnimalUnitComponent;
  let fixture: ComponentFixture<AnimalUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
