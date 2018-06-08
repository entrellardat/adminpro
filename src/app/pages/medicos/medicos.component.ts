import { URL_SERVICIOS } from './../../config/config';
import { Hospital } from './../../models/hospital.model';
import { MedicoService } from './../../services/medico/medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  constructor(public _medicosService : MedicoService) { 
    this.cargarMedicos();
  }
  medicos :Medico [] ;
  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this._medicosService.cargarMedicos().subscribe( resp=> {
      console.log(resp);
      this.medicos = resp ;
    }) ;
  }

  editarMedico(hospital : Medico){
    return null;
  }

  borrarMedico(id : string){
     this._medicosService.borrarMedico(id).subscribe( (resp : any)=>{
        this.cargarMedicos();
     });
  }

  buscarMedico(termino: string){
    if ( termino.length  === 0 || termino === undefined || termino === null){
      this.cargarMedicos();
    }
    else{
      this._medicosService.buscarMedico(termino).subscribe( (resp: any)=>{
        this.medicos = resp.medicos ;
      });
  }

}

}