import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoFormularioComponent } from './dispositivo-formulario.component';

describe('DispositivoFormularioComponent', () => {
  let component: DispositivoFormularioComponent;
  let fixture: ComponentFixture<DispositivoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
