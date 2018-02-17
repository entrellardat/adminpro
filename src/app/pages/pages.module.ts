import { NgModule } from '@angular/core';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Graficas1Component } from 'app/pages/graficas1/graficas1.component';
import { PagesComponent } from 'app/pages/pages.component';
import { SharedModule } from 'app/shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from 'app/components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from 'app/components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// temporal


@NgModule ( {
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent ,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ] ,
    exports: [
        DashboardComponent , 
        ProgressComponent , 
        Graficas1Component ,
        GraficoDonaComponent
    ] , 
    imports : [
        SharedModule,
        PAGES_ROUTES ,
        FormsModule ,
        ChartsModule
    ]
// tslint:disable-next-line:eofline
}) export class PagesModule { }