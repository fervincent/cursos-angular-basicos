import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Pepito'];
  heroeBorrado : string = '' ;
  
  borrarHeroe() : void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('borrado' + this.heroeBorrado);
    
  }
  puedeMostrar() : boolean  {
    return !(this.heroeBorrado === '');
  }
}
