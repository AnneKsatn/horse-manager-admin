import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasturesComponent } from './pastures.component';

describe('PasturesComponent', () => {
  let component: PasturesComponent;
  let fixture: ComponentFixture<PasturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
