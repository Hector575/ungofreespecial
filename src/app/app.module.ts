import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent} from './pages/productos/productos.component';
import { IngresaComponent } from './pages/ingresa/ingresa.component';
import { HabitacionalComponent } from './pages/habitacional/habitacional.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    InicioComponent,
    ProductosComponent,
    IngresaComponent,
    HabitacionalComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
