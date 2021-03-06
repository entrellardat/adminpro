import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  // propiedades por defecto
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css' ,
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document ) { 
    this.cargarAjustes();
  }

  guardarAjustes() { 
    // convierte de JSON a STRING
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }else{
      //console.log('valores por defecto');
      return null;
    }
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema ;
    this.ajustes.temaUrl = url ;

    this.guardarAjustes();
  }
}

interface Ajustes{
    temaUrl : string ;
    tema : string  ;
}
