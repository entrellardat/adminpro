import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';
import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {
  usuario : Usuario ;
  token : string ;
  constructor(public http: HttpClient  , public router : Router) {
        this.cargarStorage();
  }
  login(usuario: Usuario , recordar: false){

    const url = URL_SERVICIOS + '/login/' ;

    if (recordar)
    { localStorage.setItem('email', usuario.email); }else{ localStorage.removeItem('email');}

    return this.http.post(url , usuario)
                    .map( (resp : any) => {
                      this.guardarStorage(resp.id , resp.token , resp.usuario);
                      return true;
                    });
  }

  guardarStorage(id : string   , token : string  , usuario : Usuario) {
    localStorage.setItem('id',id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario ; 
    this.token = token ;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('item');
      this.usuario =  JSON.parse( localStorage.getItem('usuario'));
    }
    else{
      this.token = '';
      this.usuario = null ;
    }
  }

  estaLogueado() {
    if (this.token) { return true ; }

      return false ;
  }

  crearUsuario(usuario : Usuario) {
    const url =  URL_SERVICIOS + '/usuario/' ;
    return this.http.post(url , usuario)
               .map( (resp : any) => {
                 swal('Usuario creado' , resp.usuario.email , 'success')
                 return resp.usuario
               }) ;
  }

  loginGoogle (token : string) : Observable<any>  {
    const url = URL_SERVICIOS +  '/login/google' ;
    return this.http.post(url , { idToken : token })
                    .map( (resp:any) => {
                      this.guardarStorage(resp.id , resp.token , resp.usuario);
                      return true ;
                    });
  }

  logout() {
    console.log('Logout...');
    this.token = '' ;
    this.usuario = null ;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login'])
  }

}
