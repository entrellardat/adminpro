import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule   , Routes} from '@angular/router';
import { PagesComponent } from 'app/pages/pages.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';

const pagesRoutes : Routes = [
    { path : '' , 
        component: PagesComponent ,
        children : [
            { path : 'dashboard' , component : DashboardComponent },
            { path : 'progress' , component : ProgressComponent} , 
            { path : 'graficas1' , component : Graficas1Component} ,
            { path : 'account-settings' , component: AccountSettingsComponent},
            { path : '' , redirectTo : '/dashboard'  , pathMatch: 'full'} 
        ]
    } 
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);