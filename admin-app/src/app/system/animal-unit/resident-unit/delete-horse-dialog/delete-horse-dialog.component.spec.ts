import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHorseDialogComponent } from './delete-horse-dialog.component';

describe('AddHorseDialogComponent', () => {
  let component: AddHorseDialogComponent;
  let fixture: ComponentFixture<AddHorseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHorseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHorseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
