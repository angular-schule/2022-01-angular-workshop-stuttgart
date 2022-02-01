import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/


    // of('A', 'B', 'C')
    // from([1,2,3,4,5])
    // interval(1000)
    // timer(3000)

    timer(3000, 500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      complete: () => this.log('COMPLETE')
    });




    /*
    const myOf$ = new Observable((observer) => {
      observer.next('A');
      observer.next('B');
      observer.next('C');
      observer.complete();
    });*/


    /******************************/

    function producer(o: any) {
      const result = Math.random();
      o.next(result);
      o.next(5);
      o.next(7);

      setTimeout(() => o.next(9), 2000);
      setTimeout(() => o.next(10), 4000);
      setTimeout(() => o.complete(), 6000);
    }

    const observer = {
      next: (e: number) => console.log(e),
      error: (e: string) => console.error(e),
      complete: () => console.log('C')
    };

    // producer(observer);

    const myObservable$ = new Observable<number>(producer); // Finnische Notation
    // myObservable$.subscribe(observer);
    // myObservable$.subscribe(e => console.log(e));


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
