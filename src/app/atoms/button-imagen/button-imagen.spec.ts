import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImagen } from './button-imagen';

describe('ButtonImagen', () => {
  let component: ButtonImagen;
  let fixture: ComponentFixture<ButtonImagen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonImagen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonImagen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
