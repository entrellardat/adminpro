import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { NopagefoundComponent } from 'app/shared/nopagefound/nopagefound.component';
import { HeaderComponent } from 'app/shared/header/header.component';
import { BreadcrumbsComponent } from 'app/shared/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports :[
        RouterModule,
        CommonModule
    ],
    declarations : [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ] ,
    exports : [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
}) export class SharedModule { }