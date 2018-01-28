import { Component, OnInit, Input  , Output , EventEmitter , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  
  @ViewChild('txtProgress') txtProgress : ElementRef

  @Input() progreso: number = 50 ;
  @Input('nombre') leyenda : string = 'Leyenda' ;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  // tslint:disable-next-line:no-trailing-whitespace
  constructor() { 
  }
  // tslint:disable-next-line:no-trailing-whitespace
  ngOnInit() {
  }

  cambiarValor(valor){
    if (this.progreso == 100 && valor > 0 ){
      return ;
    }
    else if ( this.progreso == 0 && valor < 0 ){
      return ;
    }
    else {
      this.progreso = this.progreso + valor ;
      this.cambioValor.emit (this.progreso);
    } 
  }

  onChanges(newValue : number){

    // prevenir que la gente escriba lo qeu quiera
    //let el:any = document.getElementsByName('progreso')[0];

    //console.log(this.txtProgress);

    if ( newValue >= 100){
      this.progreso = 99 ;
    }
    else if ( newValue <= 0 ){
      this.progreso = 1 ;
    }
    else{
      this.progreso = newValue ; 
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit (this.progreso);
    this.txtProgress.nativeElement.focus();


  }

}


