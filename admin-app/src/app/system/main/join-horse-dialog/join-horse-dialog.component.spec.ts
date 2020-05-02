import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinHorseDialogComponent } from './join-horse-dialog.component';

describe('JoinHorseDialogComponent', () => {
  let component: JoinHorseDialogComponent;
  let fixture: ComponentFixture<JoinHorseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinHorseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinHorseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
