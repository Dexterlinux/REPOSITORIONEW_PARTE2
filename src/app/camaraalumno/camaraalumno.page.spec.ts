import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraalumnoPage } from './camaraalumno.page';

describe('CamaraalumnoPage', () => {
  let component: CamaraalumnoPage;
  let fixture: ComponentFixture<CamaraalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamaraalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
