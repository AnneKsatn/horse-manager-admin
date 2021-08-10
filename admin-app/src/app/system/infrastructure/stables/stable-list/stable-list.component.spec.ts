import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StableListComponent } from './stable-list.component';

describe('StableListComponent', () => {
  let component: StableListComponent;
  let fixture: ComponentFixture<StableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
