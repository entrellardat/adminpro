import { Component, OnInit } from '@angular/core';
import { Router , ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title  , Meta , MetaDefinition} from '@angular/platform-browser';      // Servicio usado para hacer coger el titulo de la pagina



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label = '' ;
  constructor( private router: Router,
               public title : Title ,
               public meta : Meta
              ) {
           this.getDataRoute().subscribe (
                data => {
                this.label = data.titulo;
                this.title.setTitle(this.label);
                let metaTag : MetaDefinition  = {
                  name: 'description' ,
                  content : this.label 
                };
                this.meta.updateTag(metaTag);

           }) ;
   }

   getDataRoute() :Observable<any>  {
   return this.router.events
            .filter(evento =>evento instanceof ActivationEnd )
            .filter((evento:ActivationEnd) => evento.snapshot.firstChild === null)
            .map( (evento:ActivationEnd ) => evento.snapshot.data);
   }

  ngOnInit() {
  }

}
