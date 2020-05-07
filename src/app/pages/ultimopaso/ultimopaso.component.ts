import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ultimopaso',
  templateUrl: './ultimopaso.component.html',
  styleUrls: ['./ultimopaso.component.css']
})
export class UltimopasoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Ultimopaso(  ) {

    

    Swal.fire({
      allowOutsideClick: true,
      icon: 'info',
      text: 'Espere por favor...'
    });
    

  }

}
