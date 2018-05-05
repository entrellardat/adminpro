import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class loginGuard implements CanActivate {
  canActivate(): boolean {
    if (this._usuarioServices.estaLogueado()){
      console.log('paso el guard');
      return true;
    }

    this.router.navigate(['/login']);

    return false ;
  }

  constructor( public _usuarioServices : UsuarioService , public router : Router ) {
  }
}
