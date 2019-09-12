import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-componente-generado',
  templateUrl: './componente-generado.component.html',
  styleUrls: ['./componente-generado.component.css']
})
export class ComponenteGeneradoComponent {

  users = ['martin', 'cecilia', 'daniela', 'toledo', 'gil', 'frank', 'adan','abel', 'jona', 'victor', 'rios'];

  nombre: string;
  tel: string;

  dataFG = this.fb.group({
    usuario: ['', Validators.required],
    telefono: ['']
  });
  
  constructor(private fb: FormBuilder) { }

  miClick(){
    this.nombre = this.dataFG.value.usuario;
    this.tel = this.dataFG.value.telefono;
    this.dataFG.patchValue({
      usuario: this.tel,
      telefono: this.nombre
    })
  }

  

}
