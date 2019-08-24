import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesubmitComponent } from './quesubmit.component';

describe('QuesubmitComponent', () => {
  let component: QuesubmitComponent;
  let fixture: ComponentFixture<QuesubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
