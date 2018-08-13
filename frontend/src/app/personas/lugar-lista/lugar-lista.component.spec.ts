import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarListaComponent } from './lugar-lista.component';

describe('LugarListaComponent', () => {
  let component: LugarListaComponent;
  let fixture: ComponentFixture<LugarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
