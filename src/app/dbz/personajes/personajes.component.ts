import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

 //@Input() personajes: Personaje [] = [];
  get personajes(){
    return this.dbzservice.personajes
  }

  constructor(private dbzservice:Dbzservice){

  }
}
