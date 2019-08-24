import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquestionComponent } from './viewquestion.component';

describe('ViewquestionComponent', () => {
  let component: ViewquestionComponent;
  let fixture: ComponentFixture<ViewquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
