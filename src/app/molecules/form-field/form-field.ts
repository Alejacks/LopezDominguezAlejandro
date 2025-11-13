import { Component, input, output } from '@angular/core';
import { InputField } from "../../atoms/input-field/input-field";
import { InputLabel } from "../../atoms/input-label/input-label";

@Component({
  selector: 'app-form-field',
  imports: [InputField, InputLabel],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  placeholder = input<string>();
  type = input<string>();
  labelText = input<string>();
  id = input<string>();
}
