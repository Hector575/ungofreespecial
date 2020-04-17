import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ingresa',
  templateUrl: './ingresa.component.html',
  styleUrls: ['./ingresa.component.css']
})
export class IngresaComponent implements OnInit {
    
  

  usuario = {
    nombre : '',
    apellido : '',
    telefono : '',
    ocupacion : '',
    direccion : '',
    correo : '',
    pais : '',
    inmueble : '',
    area : '',
    venta : '',
    renta : '',
    numero_de_casa: '',
    numero_interior:'',
    cp:'',
    Estado:'',
    ciudad:'',
    Colonia:'',
    Credencial:"",
    calle:""

  }

  paises: any [] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: '[ Seleccione Pais]',
          codigo: ''
        })

        // console.log( this.paises );
      });



  }

  

  continuar( forma: NgForm ) {
    console.log( forma.value );
    

    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });

      return;
    }
    


    
  }

}
