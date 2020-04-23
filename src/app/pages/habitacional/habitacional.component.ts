import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-habitacional',
  templateUrl: './habitacional.component.html',
  styleUrls: ['./habitacional.component.css']
})
export class HabitacionalComponent {
  public HabitacionalForm: FormGroup;
  constructor(private dbData: DataService) {
    this.HabitacionalForm = this.createForm();
  }

  get Renta() { return this.HabitacionalForm.get('Renta'); }
  get Moneda() { return this.HabitacionalForm.get('Moneda'); }
  get Venta() { return this.HabitacionalForm.get('Venta'); }
  get Banos() { return this.HabitacionalForm.get('Banos'); }
  get Habitaciones() { return this.HabitacionalForm.get('Habitaciones'); }
  

  createForm() {
    return new FormGroup({
      Renta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Moneda: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Venta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Banos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Habitaciones: new FormControl('', [Validators.required, Validators.minLength(3)]),
      
      
      
    });
  }

  onResetForm(): void {
    this.HabitacionalForm.reset();
  }

  onSaveForm(): void {
    if (this.HabitacionalForm.valid) {
      this.dbData.saveEtiqueta(this.HabitacionalForm.value);
      this.onResetForm();
    }
  }

}
  
  
