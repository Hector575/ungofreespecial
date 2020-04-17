import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionalComponent } from './habitacional.component';

describe('HabitacionalComponent', () => {
  let component: HabitacionalComponent;
  let fixture: ComponentFixture<HabitacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
