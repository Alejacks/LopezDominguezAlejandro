import { Component, input, output } from '@angular/core';

@Component({
  selector: 'button-imagen',
  standalone: true,
  templateUrl: './button-imagen.html',
})
export class ButtonImagen {
  text = input<string>();
  imageSrc = input<string>();
  onClick = output<void>();

  handleClick() {
    this.onClick.emit();
  }
}
