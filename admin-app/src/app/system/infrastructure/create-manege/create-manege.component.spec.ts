import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManegeComponent } from './create-manege.component';

describe('CreateManegeComponent', () => {
  let component: CreateManegeComponent;
  let fixture: ComponentFixture<CreateManegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
