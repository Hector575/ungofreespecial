import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component'
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresaComponent } from './pages/ingresa/ingresa.component';
import { HabitacionalComponent } from './pages/habitacional/habitacional.component';





const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'ingresa', component: IngresaComponent, canActivate: [ AuthGuard ]},
  { path: 'productos', component: ProductosComponent, canActivate: [ AuthGuard ]},
  { path: 'habitacional', component: HabitacionalComponent}, 
  

  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }