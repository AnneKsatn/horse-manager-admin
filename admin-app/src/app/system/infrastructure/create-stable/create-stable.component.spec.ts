import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStableComponent } from './create-stable.component';

describe('CreateStableComponent', () => {
  let component: CreateStableComponent;
  let fixture: ComponentFixture<CreateStableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
