import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoListaComponent } from './dispositivo-lista.component';

describe('DispositivoListaComponent', () => {
  let component: DispositivoListaComponent;
  let fixture: ComponentFixture<DispositivoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
