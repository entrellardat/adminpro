import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { element } from 'protractor';
import { SettingsService } from  '../../services/service.index' ;

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  // con este objeto tenemos acceso a todo el DOM
  constructor(  public  _ajustes: SettingsService) { console.log('entro'); }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string , link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link:any){
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores){
        ref.classList.remove('working');
    }

    console.log(link);
    link.classList.add('working');
  }

  colocarCheck(){
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema ;
    for (const ref of selectores){
      if( ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}
