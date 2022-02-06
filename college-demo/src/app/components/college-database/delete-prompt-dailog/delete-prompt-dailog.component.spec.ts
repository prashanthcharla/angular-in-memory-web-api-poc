import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromptDailogComponent } from './delete-prompt-dailog.component';

describe('DeletePromptDailogComponent', () => {
  let component: DeletePromptDailogComponent;
  let fixture: ComponentFixture<DeletePromptDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePromptDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePromptDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
