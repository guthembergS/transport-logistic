import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraFormComponent } from './transportadora-form.component';

describe('TransportadoraFormComponent', () => {
  let component: TransportadoraFormComponent;
  let fixture: ComponentFixture<TransportadoraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
