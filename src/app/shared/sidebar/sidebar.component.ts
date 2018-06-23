import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ImagenPipe } from './../../pipes/imagen.pipe';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario : Usuario;
  constructor( public _sidebar: SidebarService , public _usuarioService : UsuarioService) { 
    this.usuario = _usuarioService.usuario;
  }

  ngOnInit() {
    this._sidebar.cargarMenu();
    this.usuario = this._usuarioService.usuario;
  }

}
