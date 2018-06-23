import { Hospital } from './../../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_SERVICIOS } from 'app/config/config';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [] ;
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];
  constructor(public activatedRoutes : ActivatedRoute , public http : HttpClient) { 
    console.log('entro en  todo'); 
    activatedRoutes.params.subscribe( params => {
        const termino = params.termino
        this.buscar(termino);
    });
  }

  ngOnInit() {
    console.log('cago en todo');
  }

  buscar(termino: string){
    const url = URL_SERVICIOS + '/busqueda/todo/' + termino ;
    console.log(url);
     this.http.get(url).subscribe( (resp : any) => {
       console.log(resp);
       this.hospitales = resp.hospitales ;
       this.medicos = resp.medicos ;
       this.usuarios = resp.usuarios ;
    }); 
  }

}
