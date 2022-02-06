import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersDataTableComponent } from './lecturers-data-table.component';

describe('LecturersDataTableComponent', () => {
  let component: LecturersDataTableComponent;
  let fixture: ComponentFixture<LecturersDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
