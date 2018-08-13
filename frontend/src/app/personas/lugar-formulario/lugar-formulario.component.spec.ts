import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarFormularioComponent } from './lugar-formulario.component';

describe('LugarFormularioComponent', () => {
  let component: LugarFormularioComponent;
  let fixture: ComponentFixture<LugarFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
