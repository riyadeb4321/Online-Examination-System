import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdetailComponent } from './resultdetail.component';

describe('ResultdetailComponent', () => {
  let component: ResultdetailComponent;
  let fixture: ComponentFixture<ResultdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
