import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaderComponent } from './add-header.component';

describe('AddHeaderComponent', () => {
  let component: AddHeaderComponent;
  let fixture: ComponentFixture<AddHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
