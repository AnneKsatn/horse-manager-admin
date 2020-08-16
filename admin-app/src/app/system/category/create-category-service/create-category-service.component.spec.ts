import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryServiceComponent } from './create-category-service.component';

describe('CreateCategoryServiceComponent', () => {
  let component: CreateCategoryServiceComponent;
  let fixture: ComponentFixture<CreateCategoryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
