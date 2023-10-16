import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BitacorasiguientePage } from './bitacorasiguiente.page';

describe('BitacorasiguientePage', () => {
  let component: BitacorasiguientePage;
  let fixture: ComponentFixture<BitacorasiguientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BitacorasiguientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
