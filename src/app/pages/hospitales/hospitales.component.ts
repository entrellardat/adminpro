import { HospitalService } from './../../services/hospital.service';
import { Component, OnInit  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { ModalUploadComponent } from '../../components/modal-upload/modal-upload.component';
import { Hospital } from '../../models/hospital.model';
import { SubirArchivoService } from '../../services/subir-archivo.service';
import { ENGINE_METHOD_DIGESTS } from 'constants';
declare var swal : any ;



@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[];
  desde: number = 0 ;
  totalRegistros : number = 0 ;
  cargando : boolean = false ;

  cargarHospitales() {
    this._hospitalService.cargarHospitales().subscribe((resp: any)=>{
      this.hospitales = resp.hospitales;
      this.totalRegistros = resp.contador ;
   });
  }

  // tslint:disable-next-line:max-line-length
  constructor(public _hospitalService: HospitalService , public _modalUploadService : ModalUploadService)  {
      this.cargarHospitales();
      this._modalUploadService.notificacion.subscribe(()=> this.cargarHospitales());
      this._modalUploadService.notificacion.subscribe((resp)=>{
          this.cargarHospitales();
      })
   }

   buscarHospital(termino: string) {
      if ( termino.length  === 0 || termino === undefined || termino === null){
        this.cargarHospitales();
      }
      else{
        console.log (termino);
        this._hospitalService.buscarHospital(termino).subscribe( (resp: any)=>{
          this.hospitales = resp.hospitales ;
          this.totalRegistros = this.hospitales.length;
        });
      }

   }

   guardarHospital(hospital : Hospital) {
          swal({
            title: '¿Esta seguro?',
            text: 'Esta a punro de actualizar a ' + hospital.nombre,
            icon: 'warning',
            buttons: true,
            dangerMode: true,
      })
      .then((actualizar) => {
          if (actualizar) {
            this._hospitalService.actualizarHospital(hospital).subscribe( () => this.cargarHospitales());
          }
      });
  }


   borrarHospital(hospital: Hospital) {
        swal({
                title: '¿Esta seguro?',
                text: 'Esta a punro de borrar a ' + hospital.nombre,
                icon: 'warning',
                buttons: true,
                dangerMode: true,
        })
        .then((borrar) => {
              if (borrar) {
                this._hospitalService.borrarHospital(hospital._id).subscribe((resp:any)=>{
                  this.cargarHospitales();
                });
              }
      });
   }

  actualizarHospital(h : Hospital ){
        this._hospitalService.actualizarHospital(h).subscribe(()=>{
          this.cargarHospitales();
        });
  }

  actualizarImagen(hospital: Hospital){
    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }

  mostrarModal(id : string){
    this._modalUploadService.mostrarModal('hospitales', id );
  }


  crearHospital() {

    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( (valor: string ) => {

      if ( !valor || valor.length === 0 ) {
        return;
      }

      this._hospitalService.crearHospital( valor )
              .subscribe( () => this.cargarHospitales() );

    });

  }


  ngOnInit() {
  }

}
