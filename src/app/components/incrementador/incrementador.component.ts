import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  
  
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  
  // @Input() progreso: number = 50;
  
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  

  ngOnInit(): void {
   this.btnClass = `btn ${this.btnClass}`;
  }

  get getPorcentaje(){
    return  `${this.progreso}%`;
  }

  cambiarValor(valor:number){
    if( this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100
    };
    if( this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
    return this.progreso;
  }

  onChange(valorNuevo: number){
    if (valorNuevo >= 100) {
      this.progreso = 100;
      this.valorSalida.emit(100);
      return;
    }

    if (valorNuevo <= 0) {
      this.progreso = 0;
      this.valorSalida.emit(0);
      return;
    }
    
    this.progreso = valorNuevo;
    this.valorSalida.emit(this.progreso);
  }
}
