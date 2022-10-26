import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = ''; //Usar 'string | undefined' funciona pero no esta muy bien hacerlo (esta fue la que yo hice)

  borrarHeroe(){
    console.log('BORRANDO...');
    this.heroeBorrado = this.heroes.shift() || ''; //Esta sería la forma correcta de hacerlo
  }
}
