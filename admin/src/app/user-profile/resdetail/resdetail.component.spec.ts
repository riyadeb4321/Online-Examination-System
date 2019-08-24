import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdetailComponent } from './resdetail.component';

describe('ResdetailComponent', () => {
  let component: ResdetailComponent;
  let fixture: ComponentFixture<ResdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
