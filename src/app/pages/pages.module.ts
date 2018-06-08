import { CommonModule } from '@angular/common';
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
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';

// temporal


@NgModule ( {
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent ,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent
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
        ChartsModule , 
        PipesModule , 
        CommonModule
    ]
// tslint:disable-next-line:eofline
}) export class PagesModule { }