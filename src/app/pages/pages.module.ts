import { NgModule } from '@angular/core';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';
import { PagesComponent } from 'app/pages/pages.component';
import { SharedModule } from 'app/shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule ( {
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent

    ] ,
    exports: [
        DashboardComponent , 
        ProgressComponent , 
        Graficas1Component 
    ] , 
    imports : [
        SharedModule,
        PAGES_ROUTES
    ]
// tslint:disable-next-line:eofline
}) export class PagesModule { }