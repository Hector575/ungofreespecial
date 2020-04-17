import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaComponent } from './ingresa.component';

describe('IngresaComponent', () => {
  let component: IngresaComponent;
  let fixture: ComponentFixture<IngresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
