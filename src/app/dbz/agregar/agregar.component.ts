import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  constructor(private dbzservice:Dbzservice){

  }

  agregar(){
    if (this.nuevo.nombre.trim() === ''){
      return;
    }

    //this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzservice.agregarPersonaje(this.nuevo);
    
    this.nuevo = {nombre:'',poder:0}

   
  }
}
