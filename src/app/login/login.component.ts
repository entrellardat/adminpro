import { UsuarioService } from './../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi : any ;   // le estoy diciendo a google confia en mi existe una liberia llmada gapi



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string ;
  recuerdame: boolean = false ;
  auth2 : any ;
  constructor( public router: Router ,
               public usuario_: UsuarioService
  ) { 

  }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || ''  ;
    if(this.email.length > 0){
      this.recuerdame = true ;
    }
  }

  googleInit() {
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id : '540139584127-gr3nvac6kujlmmaf8ahn9sf1f75esgla.apps.googleusercontent.com' , 
        cookiepolicie : 'single_host_origin' , 
        scope : 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }


  attachSignin (element) {
    this.auth2.attachClickHandler(element , {} , googleUser => {
      const token = googleUser.getAuthResponse().id_token;
      this.usuario_.loginGoogle(token)
                   .subscribe( () => window.location.href = '#/dashboard');
    });
  }

  ingresar( forma: NgForm) {
      const usuario = new Usuario(null , forma.value.email , forma.value.password);
      this.usuario_.login(usuario,forma.value.recuerdame).subscribe( resp => { this.router.navigate(['/dashboard']) });
  }


}
