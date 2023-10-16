import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagmaquetaPage } from './pagmaqueta.page';

describe('PagmaquetaPage', () => {
  let component: PagmaquetaPage;
  let fixture: ComponentFixture<PagmaquetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagmaquetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
