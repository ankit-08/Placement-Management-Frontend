import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompanybydeptComponent } from './viewcompanybydept.component';

describe('ViewcompanybydeptComponent', () => {
  let component: ViewcompanybydeptComponent;
  let fixture: ComponentFixture<ViewcompanybydeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompanybydeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompanybydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
