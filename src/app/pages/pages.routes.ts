import { AdminGuard } from './../services/guards/admin.guard';
import { MedicoComponent } from './medicos/medico.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule   , Routes} from '@angular/router';
import { PagesComponent } from 'app/pages/pages.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';
import { loginGuard } from '../services/guards/loginGuard.service';
import { ProfileComponent } from './profile/profile.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const pagesRoutes : Routes = [
    { path : '' , 
        component: PagesComponent ,
        canActivate : [ loginGuard ] ,
        children : [
            { path : 'dashboard' , component : DashboardComponent  , data : { titulo : 'Dashboard' }},
            { path : 'progress' , component : ProgressComponent   , data : { titulo : 'ProgressBars' }} ,
            { path : 'graficas1' , component : Graficas1Component , data : { titulo : 'Graficas' }} ,
            { path : 'account-settings' , component: AccountSettingsComponent  , data : {titulo : 'Ajustes de tema' } },
            { path: 'profile' , component : ProfileComponent , data : { titulo : 'Perfil de usuario'}},
            { path: 'busqueda/:termino' , component : BusquedaComponent , data : { titulo : 'Buscador'}},
            { path : 'promesas' , component : PromesasComponent  , data : { titulo : 'Promesas' }},
            { path : 'rxjs' , component: RxjsComponent , data : { titulo : 'Rxjs'}  }  ,
            { path : 'usuarios' , component :  UsuariosComponent , 
                    canActivate: [ AdminGuard ] ,  data : { titulo : 'Mantenimiento de usuarios'  } } ,
            { path : 'hospitales' , component :  HospitalesComponent , data : { titulo : 'Mantenimiento de hospitales'  } } ,
            { path : 'medicos' , component: MedicosComponent , data : { titulo : 'Mantenimiento de medicos'  } } ,
            { path : 'medico/:id' , component: MedicoComponent , data : { titulo : 'Mantenimiento de medico'  } } ,
            { path : '' , redirectTo : '/dashboard'  , pathMatch: 'full'} 
        ]
    } 
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);