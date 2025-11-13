import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./atoms/button/button";
import { FormField } from "./molecules/form-field/form-field";
import { ButtonImagen } from "./atoms/button-imagen/button-imagen";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, FormField, ButtonImagen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LopezDominguezAlejandro');
  doSomething(): void {
    
  }
}
