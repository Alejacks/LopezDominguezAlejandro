import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  imports: [],
  templateUrl: './input-label.html',
  styleUrl: './input-label.scss',
})
export class InputLabel {
  for = input<string>();
  labelText = input<string>();
}
