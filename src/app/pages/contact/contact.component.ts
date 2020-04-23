import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data-db.service';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private dbData: DataService) {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  
  get apellido() {return this.contactForm.get( 'apellido');}
  get calle() {return this.contactForm.get( 'calle');}
  get Cp() {return this.contactForm.get( 'Cp');}
  get NumeroExterior() {return this.contactForm.get( 'NumeroExterior');}
  get NumeroInterior() {return this.contactForm.get( 'NumeroInterior');}
  get telefono() {return this.contactForm.get( 'telefono');}
  get colonia() {return this.contactForm.get( 'colonia');}
  get ciudad() {return this.contactForm.get( 'ciudad');}
  get Estado() {return this.contactForm.get( 'Estado');}
  get venta() {return this.contactForm.get( 'venta');}
  get renta() {return this.contactForm.get( 'renta');}
  get area() {return this.contactForm.get( 'area');}

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      calle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Cp: new FormControl('', [Validators.required, Validators.minLength(3)]),
      NumeroExterior: new FormControl('', [Validators.required, Validators.minLength(2)]),
      NumeroInterior: new FormControl('000', [Validators.required, Validators.minLength(2)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
      colonia: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Estado: new FormControl('', [Validators.required, Validators.minLength(3)]),
      venta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      renta: new FormControl('', [Validators.required, Validators.minLength(3)]),
      area: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }
  }

}
