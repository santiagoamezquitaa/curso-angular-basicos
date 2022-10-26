import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{titulo}} </h1> 
        <h3>La base es: <strong> {{base}} </strong></h3>
        <button (click)=acumular(base)>+ {{base}}</button>
        <span> {{numero}} </span>
        <button (click)=acumular(-base)>- {{base}}</button>
    `
})

export class ContadorComponent {
    public titulo: string = 'App ACUMULADOR'; //Se puede hacer destructuración y llamar esta variable desde el componenete de html de la app
    public numero: number = 0;
  
    public base: number = 10;
  
    acumular( valor: number ) {
      this.numero += valor;
    }
}