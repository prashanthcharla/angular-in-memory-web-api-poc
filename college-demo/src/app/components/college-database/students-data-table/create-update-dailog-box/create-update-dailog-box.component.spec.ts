import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDailogBoxComponent } from './create-update-dailog-box.component';

describe('CreateUpdateDailogBoxComponent', () => {
  let component: CreateUpdateDailogBoxComponent;
  let fixture: ComponentFixture<CreateUpdateDailogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateDailogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
