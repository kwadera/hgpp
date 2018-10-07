import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorauntComponent } from './restoraunt.component';

describe('RestorauntComponent', () => {
  let component: RestorauntComponent;
  let fixture: ComponentFixture<RestorauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
