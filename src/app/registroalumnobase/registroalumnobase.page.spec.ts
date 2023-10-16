import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroalumnobasePage } from './registroalumnobase.page';

describe('RegistroalumnobasePage', () => {
  let component: RegistroalumnobasePage;
  let fixture: ComponentFixture<RegistroalumnobasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroalumnobasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
