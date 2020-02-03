import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilButtonComponent } from './pencil-button.component';

describe('PencilButtonComponent', () => {
  let component: PencilButtonComponent;
  let fixture: ComponentFixture<PencilButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencilButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
