import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeDatabaseComponent } from './college-database.component';

describe('CollegeDatabaseComponent', () => {
  let component: CollegeDatabaseComponent;
  let fixture: ComponentFixture<CollegeDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
