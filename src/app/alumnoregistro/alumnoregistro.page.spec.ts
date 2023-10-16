import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoregistroPage } from './alumnoregistro.page';

describe('AlumnoregistroPage', () => {
  let component: AlumnoregistroPage;
  let fixture: ComponentFixture<AlumnoregistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
