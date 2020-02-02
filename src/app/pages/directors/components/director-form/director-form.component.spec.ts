import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorFormComponent } from './director-form.component';

describe('DirectorFormComponent', () => {
  let component: DirectorFormComponent;
  let fixture: ComponentFixture<DirectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
