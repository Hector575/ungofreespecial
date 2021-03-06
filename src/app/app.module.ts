import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DataService } from './../app/services/data-db.service';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent} from './pages/productos/productos.component';
import { HabitacionalComponent } from './pages/habitacional/habitacional.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PdfComponent } from './pages/pdf/pdf.component';
import { UltimopasoComponent } from './pages/ultimopaso/ultimopaso.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';








@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    InicioComponent,
    ProductosComponent,
    HabitacionalComponent,
    ContactComponent,
    PdfComponent,
    UltimopasoComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    



    ],
  providers: [ DataService, CargaImagenesService, ],
  bootstrap: [AppComponent]
})
export class AppModule {}
