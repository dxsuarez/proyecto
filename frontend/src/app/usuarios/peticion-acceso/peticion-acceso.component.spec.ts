import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionAccesoComponent } from './peticion-acceso.component';

describe('PeticionAccesoComponent', () => {
  let component: PeticionAccesoComponent;
  let fixture: ComponentFixture<PeticionAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
