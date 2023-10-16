import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigqrPage } from './codigqr.page';

describe('CodigqrPage', () => {
  let component: CodigqrPage;
  let fixture: ComponentFixture<CodigqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodigqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
