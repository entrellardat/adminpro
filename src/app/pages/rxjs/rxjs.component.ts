import { Component, OnInit , OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { setInterval, clearInterval } from 'timers';
import "rxjs/add/operator/retry";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit , OnDestroy {

  subscription : Subscription
  constructor() { 
      this.subscription = this.regresaObservable()
          .subscribe(
            (numero) => {console.log('Subs ' , numero );}  , // 1º callback , cuando se llama un next();
            (error)  => {console.error('Error en el obs (2 veces)',error)} ,  // 2º cabalack , cuand ohay error
            ()       => {console.log('El observable termino!')}
          );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}


  regresaObservable() : Observable<any>{
         return new Observable( observer => {
              let contador = 0 ;
              const intervalo = setInterval(() => {
                contador += 1;
                let salida = {
                  valor : contador
                }
                observer.next(salida);
              }, 500);
        })
        .retry(2)
        .map( (resp:any) => {
          return resp.valor ;
        })
        .filter( (valor,index) => {
          if ( valor % 2 === 1 ){
            // impar
            return true ;
          }
          else{
            return false ;
          }
        });
        ;
  }

}
