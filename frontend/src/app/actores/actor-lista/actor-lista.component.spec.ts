import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorListaComponent } from './actor-lista.component';

describe('ActorListaComponent', () => {
  let component: ActorListaComponent;
  let fixture: ComponentFixture<ActorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
