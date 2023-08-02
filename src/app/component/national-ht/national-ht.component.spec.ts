import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalHTComponent } from './national-ht.component';

describe('NationalHTComponent', () => {
  let component: NationalHTComponent;
  let fixture: ComponentFixture<NationalHTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalHTComponent]
    });
    fixture = TestBed.createComponent(NationalHTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
