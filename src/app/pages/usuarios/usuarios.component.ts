import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
declare var swal : any ;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  desde: number = 0 ;
  totalRegistros : number = 0 ;
  cargando : boolean = false ;
  constructor(public _usuarioService : UsuarioService , 
              public _modalUploadService : ModalUploadService) { 
  this.cargarUsuarios();
  }

  ngOnInit() {
    this._modalUploadService.notificacion.subscribe( resp => {
      this.cargarUsuarios();
    });
  }

  mostrarModal(id : string){
    this._modalUploadService.mostrarModal('usuarios', id );
  }

  cargarUsuarios(){
    this._usuarioService.cargarUsuarios(this.desde).subscribe((data:any)=>{
      this.cargando = true ;
      this.usuarios = data.usuarios ;
      this.totalRegistros = data.total;
      this.cargando = false ;
    })
  }

  cambiarDesde(valor : number){

    if (this.desde + valor < 0 || this.desde + valor > this.totalRegistros)
    {
      return ;
    }

    this.desde = this.desde + valor ;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string){
    if( termino.length <= 0){
      this.cargarUsuarios();
      return ;
    }
    this.cargando = true ;

      this._usuarioService.buscarUsuarios(termino).subscribe((data:any)=>{
        this.usuarios = data.usuarios ;
        this.cargando = false ;
     });

  }
  
  borrarUsuario(usuario: Usuario){
    if (usuario._id === this._usuarioService.usuario._id){
        swal('No se puede borrar el usuario' ,'No se puede borrar a si mimos', 'error');
        return ;
    }

    swal({
      title: "¿Esta seguro?",
      text: 'Esta a punro de borrar a ' + usuario.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      console.log(borrar);
      if (borrar) {
        this._usuarioService.borrarUsuario(usuario._id).subscribe((resp:any)=>{
          this.desde = 0 ;  
          this.cargarUsuarios();
        });
      } 
  });
}

guardarUsuario(usuario: Usuario){
  this._usuarioService.actualizarUsuario(usuario).subscribe();
}



}
