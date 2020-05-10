import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingTimeComponent } from './feeding-time.component';

describe('FeedingTimeComponent', () => {
  let component: FeedingTimeComponent;
  let fixture: ComponentFixture<FeedingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
