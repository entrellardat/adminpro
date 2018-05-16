import { ImagenPipe } from './../../pipes/imagen.pipe';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
usuario : Usuario;
  constructor(public _usuarioService : UsuarioService) { 
    this.usuario = _usuarioService.usuario;
  }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }
}
