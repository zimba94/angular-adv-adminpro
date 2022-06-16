import { Component } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {
  public labels1: string[] = [ 'Tacos', 'Bebidas', 'Hamburguesas' ];
  public data1: number[] = [ 10, 15, 20];

}
