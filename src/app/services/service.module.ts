import { loginGuard } from './guards/loginGuard.service';
import { UsuarioService } from './usuario/usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService , SidebarService , SharedService } from './service.index';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule ,
    HttpClientModule
  ],
  providers : [SettingsService ,SidebarService , SharedService , UsuarioService , loginGuard ] ,
  declarations: [ ]
})
export class ServiceModule { }
