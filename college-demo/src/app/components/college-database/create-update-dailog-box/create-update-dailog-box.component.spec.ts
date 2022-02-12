import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCreateUpdateDailogBoxComponent } from './create-update-dailog-box.component';

describe('CreateUpdateDailogBoxComponent', () => {
  let component: CollegeCreateUpdateDailogBoxComponent;
  let fixture: ComponentFixture<CollegeCreateUpdateDailogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCreateUpdateDailogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCreateUpdateDailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
