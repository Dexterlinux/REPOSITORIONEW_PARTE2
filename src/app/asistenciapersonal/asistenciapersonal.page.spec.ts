import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciapersonalPage } from './asistenciapersonal.page';

describe('AsistenciapersonalPage', () => {
  let component: AsistenciapersonalPage;
  let fixture: ComponentFixture<AsistenciapersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciapersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
