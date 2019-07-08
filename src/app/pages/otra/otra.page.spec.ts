import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraPage } from './otra.page';

describe('OtraPage', () => {
  let component: OtraPage;
  let fixture: ComponentFixture<OtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
