import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../models/usuario.model';

@Component({
  selector: 'app-habitacional',
  templateUrl: './habitacional.component.html',
  styleUrls: ['./habitacional.component.css']
})
export class HabitacionalComponent implements OnInit {
  
  
usuario = {
  Cinco_mil_renta:"",
  Nueve_mil_renta:"",
  treinta_mil_renta:"",
  setenta_mil_renta:"",
  punto_15_M_renta:"",
  punto_35_M_renta:"",
  punto_70_M_renta:"",
  punto_9_M_mas_renta:"",
  Monedauno_MX:"",
  Monedados_US:"",
  Monedatres_Euro:"",
  Venta_punto_5M:"",
  Venta_1_punto_1_M:"",
  Venta_2_punto_5_M:"",
  Venta_6M:"",
  Venta_15M:"",
  Venta_50M:"",
  Venta_150M:"",
  Venta_500M:"",
  Venta_999M:"",
  Banos_3:"",
  Banos_5:"",
  Banos_9_o_mas:"",
  Habitaciones_3:"",
  Habitaciones_5:"",
  Habitaciones_9_o_mas:""

  }



  constructor() { }

  ngOnInit() {
  }
  guardar( forma: NgForm ) {
    console.log( forma );
    console.log( forma.value );

    


    
  }

}


