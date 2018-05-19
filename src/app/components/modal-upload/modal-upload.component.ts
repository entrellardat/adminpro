import { SubirArchivoService } from './../../services/subir-archivo.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html']
})
export class ModalUploadComponent implements OnInit {
  usuario: Usuario ;
  imagenSubir: File ;
  imagenTemp: string ;
  constructor(public _subirArchivoService : SubirArchivoService ,
              public _modalUploadService :   ModalUploadService
            )
            { 

            }

  ngOnInit() {
  }

  seleccionImagen(archivo: File){
    if (!archivo){
      this.imagenSubir = null ;
      return;
    }

  if (archivo.type.indexOf('image') < 0){
    swal('Solo imagenes' , 'El archivo seleccionado no es una imagen' , 'error');
    this.imagenSubir = null ;
    return ;
  }
    this.imagenSubir = archivo ;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => {this.imagenTemp = reader.result; };
  }

  subirImagen() {
      this._subirArchivoService.subirArchivo(this.imagenSubir, this._modalUploadService.tipo , this._modalUploadService.id).then((resp)=>{
            this._modalUploadService.notificacion.emit(resp);
            this._modalUploadService.ocultarModal();
    })
    .catch((err)=>{
      console.log('error en la carga');
    });
  }

  cerrarModal() {
    this._modalUploadService.ocultarModal();
    this.imagenSubir = null ;
    this.imagenTemp = null ;
  }

}

