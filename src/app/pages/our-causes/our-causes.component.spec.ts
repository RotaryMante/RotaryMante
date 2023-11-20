import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCausesComponent } from './our-causes.component';

describe('OurCausesComponent', () => {
  let component: OurCausesComponent;
  let fixture: ComponentFixture<OurCausesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCausesComponent]
    });
    fixture = TestBed.createComponent(OurCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
