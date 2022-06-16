import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() title: string = 'Sin título';
  @Input('labels') doughnutChartLabels: string[] = ['label1', 'label2','label3'];
  @Input() data: number[] = [0,0,0,];

  public colors = ['#6857E6', '#009FEE', '#F02059'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
       data: this.data,
       backgroundColor: this.colors,
       hoverBackgroundColor: this.colors,
      }
    ]
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets:[
        { 
         data: this.data,
         backgroundColor: this.colors,
         hoverBackgroundColor: this.colors,
        }
      ]
   
    }
   
  }

}
