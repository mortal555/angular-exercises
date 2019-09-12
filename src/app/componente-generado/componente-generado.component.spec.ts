import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGeneradoComponent } from './componente-generado.component';

describe('ComponenteGeneradoComponent', () => {
  let component: ComponenteGeneradoComponent;
  let fixture: ComponentFixture<ComponenteGeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteGeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteGeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
