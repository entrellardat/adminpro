import { SubirArchivoService } from './subir-archivo.service';
import { Hospital } from './../models/hospital.model';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { UsuarioService } from './service.index';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable()
export class HospitalService {
  hospital: Hospital ;
  constructor(public http : HttpClient , public _usuarioService : UsuarioService , public _subirArchivo : SubirArchivoService )  { }

  cargarHospitales() {
    const url = `${URL_SERVICIOS}/hospital`;
    return this.http.get(url);
  }

  buscarHospital( termino: string ){
    const url = 'http://localhost:3000/busqueda/coleccion/hospitales/' + termino ;
    return this.http.get(url);
  }

  borrarHospital (id : string) {
    const url = 'http://localhost:3000/hospital/' + id + '?token=' + this._usuarioService.token;
    return this.http.delete(url)
                    .map( resp => { swal('Hospital borrado'), 'Eliminado correctamente', 'success'})
  }

  actualizarHospital(hospital : Hospital){
    const url = 'http://localhost:3000/hospital/' + hospital._id + '?token=' + this._usuarioService.token;
    return this.http.put(url , hospital)
                    .map( (resp:any) =>  resp.hospital) ;
  }

  obtenerHospital(id : string){
    console.log(id);
    const url = 'http://localhost:3000/hospital/' + id ;
    return this.http.get(url).map( (resp: any) => resp.hospital);
  }

  crearHospital(nombre) {
    const url = 'http://localhost:3000/hospital'  + '?token=' + this._usuarioService.token;
    return this.http.post(url , { nombre: nombre })
                     .map( (resp: any) => { console.log( resp.hospital)} );
  }
}
