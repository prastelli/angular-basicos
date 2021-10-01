import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor'];
  heroeBorrados: string [] = [];
  
  borrarHeroe() {
    if (this.heroes.length > 0){
      this.heroeBorrados.push(this.heroes.shift() || '');
    }   
  }

}
