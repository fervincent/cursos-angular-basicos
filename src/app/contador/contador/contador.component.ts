import { Component } from "@angular/core";
@Component({
    selector:'app-contador',
    template: `
<h1>{{titulo}}</h1>

<span>{{numero}}</span>

<button (click)="acumular();">{{mostrarAgregarBase()}}</button>
<button (click)="acumular();">{{mostrarReducirBase()}}</button>

<h3>La base es:<strong>{{base}}</strong></h3>    
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public  base : number = 10;
    acumular() {
      this.numero += this.base;
    }
  
  
    public mostrarAgregarBase() : string {
      return "+" + this.base;
    }
    public mostrarReducirBase() : string {
      return "-" + this.base;
    }    
}