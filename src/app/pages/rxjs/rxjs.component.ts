import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;

  constructor() {
    // this.returnObservable()
    // .pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   valor => console.log('Subs:', valor),
    //   err => console.warn('Error: ', err),
    //   ()=> console.log("Obs terminado"),
    // );
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number>{
    return interval(500)
    .pipe(
      // take(10),
      map(valor => valor+ 1),
      filter(valor => (valor % 2 === 0) ? true : false)
    );
  }

  returnObservable(): Observable<number>{
    let i=-1;
    return new Observable<number>(observer => {
      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);

        if ( i===4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if ( i===2) {
          observer.error('i llegó al valor 2');
        }
      }, 1000);
    });
  }
}
