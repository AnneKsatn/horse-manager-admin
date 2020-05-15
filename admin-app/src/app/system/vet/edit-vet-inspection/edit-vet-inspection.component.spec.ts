import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetInspectionComponent } from './edit-vet-inspection.component';

describe('EditVetInspectionComponent', () => {
  let component: EditVetInspectionComponent;
  let fixture: ComponentFixture<EditVetInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVetInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVetInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
