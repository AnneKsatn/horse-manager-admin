import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVetInspectionComponent } from './create-vet-inspection.component';

describe('CreateVetInspectionComponent', () => {
  let component: CreateVetInspectionComponent;
  let fixture: ComponentFixture<CreateVetInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVetInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVetInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
