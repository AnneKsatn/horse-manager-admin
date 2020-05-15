import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVetInspectionComponent } from './info-vet-inspection.component';

describe('InfoVetInspectionComponent', () => {
  let component: InfoVetInspectionComponent;
  let fixture: ComponentFixture<InfoVetInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVetInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVetInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
