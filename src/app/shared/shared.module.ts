import { NgModule } from '@angular/core';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { NopagefoundComponent } from 'app/shared/nopagefound/nopagefound.component';
import { HeaderComponent } from 'app/shared/header/header.component';
import { BreadcrumbsComponent } from 'app/shared/breadcrumbs/breadcrumbs.component';
@NgModule({
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