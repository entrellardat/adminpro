import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'app/config/config';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class MedicoService {
  totalMedicos : number = 0 ;
  constructor(
  public http: HttpClient ,public  _usuarioService : UsuarioService
  ){ }

  cargarMedicos() {
    const url = `${URL_SERVICIOS}/medico`;
    return this.http.get(url).map( (resp:any)=>{
       this.totalMedicos = resp.contador || 0 ;
       return resp.medicos ;
    })
  }

  buscarMedico( termino: string ){
    const url = 'http://localhost:3000/busqueda/coleccion/medicos/' + termino ;
    return this.http.get(url);
  }

  borrarMedico( id : string){
    const url = URL_SERVICIOS + '/medico/' + id  + '?token=' + this._usuarioService.token ;
    return this.http.delete(url)
                    .map(resp => {
                      swal('medico borrado' , 'Medico borrado correctamente' , 'success')
                      return resp;
                    });
  }
}
