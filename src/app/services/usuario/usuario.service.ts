import { SubirArchivoService } from '../../services/subir-archivo.service';
import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';
import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsuarioService {
  usuario : Usuario ;
  token : string ;
  menu : any = [];
  constructor(public http: HttpClient  , public router : Router ,public _subirArchivo :  SubirArchivoService) {
        this.cargarStorage();
  }
  login(usuario: Usuario , recordar: false){

    const url = URL_SERVICIOS + '/login/' ;

    if (recordar)
    {
      localStorage.setItem('email', usuario.email); }
    else
    {
      localStorage.removeItem('email');
    }

     return this.http.post(url , usuario)
                    .map( (resp : any) => {
                        this.guardarStorage(resp.id , resp.token , resp.usuario , resp.menu);
                        return true;
                    })
                    .catch( err => {
                        swal('Error en el login',err.error.mensaje , 'error') ;
                        return Observable.throw(err);
                    });
  }

  guardarStorage(id : string   , token : string  , usuario : Usuario , menu : any) {
    localStorage.setItem('id',id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu' , JSON.stringify(menu))

    this.menu = menu ;
    this.usuario = usuario ; 
    this.token = token ;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario =  JSON.parse(localStorage.getItem('usuario')); 
      this.menu =  JSON.parse(localStorage.getItem('menu')); 
    }
    else{
      this.token = '';
      this.usuario = null ;
      this.menu = null;
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
               })                    
               .catch( err => {
                 console.log(err);
                 swal(err.error.mensaje ,err.error.errors.message , 'error') ;
                 return Observable.throw(err);
              }); 
  }

  loginGoogle (token : string) : Observable<any>  {
    const url = URL_SERVICIOS +  '/login/google' ;
    return this.http.post(url , { idToken : token })
                    .map( (resp:any) => {
                      this.guardarStorage(resp.id , resp.token , resp.usuario , resp.menu);
                      console.log(resp);
                      return true ;
                    });
  }

  logout() {
    this.token = '' ;
    this.usuario = null ;
    this.menu = [] ;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
 
   actualizarUsuario (usuario : Usuario) {
     console.log('usuario a actualziar' + usuario);
     let url = URL_SERVICIOS + '/usuario/' + usuario._id ;
     url += '?token=' + this.token ;
     return this.http.put(url , usuario)
                     .map((resp: any)=> {
                        if(usuario._id === this.usuario._id)
                        {
                          this.guardarStorage(resp.usuario._id , this.token , this.usuario , this.menu) ;
                        }
                        swal('Usuario actualizado' , usuario.nombre , 'success');
                        return true;
                     }).catch( err => {
                      console.log(err);
                      swal(err.error.mensaje ,err.error.errors.message , 'error') ;
                      return Observable.throw(err);
                   }); 
   }

   cambiarImagen(archivo : any , id : string ) {
     console.log(archivo);
      this._subirArchivo.subirArchivo(archivo, 'usuarios', id).then((resp:any)=>{
           this.usuario.img = resp.archivo.img ;
           swal('imagen actualziada', this.usuario.nombre , 'success');
           this.guardarStorage(id , this.token , this.usuario , this.menu);
       }).catch( error => console.log(error) );
}


cargarUsuarios(desde: number = 0 ) {
  const url = `${URL_SERVICIOS}/usuario?desde=${desde}`;
  return this.http.get(url);
}

buscarUsuarios( termino:string){
  const url = `${URL_SERVICIOS}/busqueda/coleccion/usuarios/${termino}`;
  console.log(url);
  return this.http.get(url);
}

borrarUsuario(id : string){
  let url = URL_SERVICIOS + '/usuario/' + id ;
  url += '?token=' + this.token ;
  return this.http
            .delete(url)
            .map( resp=> {
              swal('Usuario borrado' , 'El usuario ha sido eliminado correctamente' , 'success')
              return true;
            });
}

}
