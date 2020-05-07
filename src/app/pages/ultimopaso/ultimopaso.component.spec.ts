import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimopasoComponent } from './ultimopaso.component';

describe('UltimopasoComponent', () => {
  let component: UltimopasoComponent;
  let fixture: ComponentFixture<UltimopasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimopasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimopasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
