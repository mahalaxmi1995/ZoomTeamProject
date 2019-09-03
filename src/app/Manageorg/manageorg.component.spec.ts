import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageorgComponent } from './manageorg.component';

describe('ManageorgComponent', () => {
  let component: ManageorgComponent;
  let fixture: ComponentFixture<ManageorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
