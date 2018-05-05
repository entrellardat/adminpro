import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule   , Routes} from '@angular/router';
import { PagesComponent } from 'app/pages/pages.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';
import { loginGuard } from '../services/guards/loginGuard.service';

const pagesRoutes : Routes = [
    { path : '' , 
        component: PagesComponent ,
        canActivate : [ loginGuard ] ,
        children : [
            { path : 'dashboard' , component : DashboardComponent  , data : { titulo : 'Dashboard' }},
            { path : 'progress' , component : ProgressComponent   , data : { titulo : 'ProgressBars' }} , 
            { path : 'graficas1' , component : Graficas1Component , data : { titulo : 'Graficas' }} ,
            { path : 'account-settings' , component: AccountSettingsComponent  , data : {titulo : 'Ajustes de tema' } },
            { path : 'promesas' , component : PromesasComponent  , data : { titulo : 'Promesas' }}, 
            { path : 'rxjs' , component: RxjsComponent , data : { titulo : 'Rxjs'}  }  , 
            { path : '' , redirectTo : '/dashboard'  , pathMatch: 'full'} 
        ]
    } 
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);