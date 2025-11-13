// src/app/organisms/payment-form/payment-form.ts
import { Component, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../atoms/button/button'; 
import { InputLabel } from '../../atoms/input-label/input-label';
import { InputField } from '../../atoms/input-field/input-field';

export interface PaymentDetails {
    deliveryTime: string;
    address: string;
    paymentMethod: 'card' | 'bizum';
    paymentInfo: string;
}

@Component({
  selector: 'app-payment-form',
  imports: [CommonModule, Button, InputLabel, InputField],
  templateUrl: './payment-form.html'
})
export class PaymentFormComponent {
    // Inputs/Outputs
    cartNotEmpty = input.required<boolean>(); 
    paymentComplete = output<PaymentDetails>();
    clearOrder = output<void>();

    // Internal Form State Signals
    deliveryTime = signal<string>('');
    address = signal<string>('');
    paymentMethod = signal<'card' | 'bizum'>('card');
    paymentInfo = signal<string>('');
    validationErrors = signal<string[]>([]);
    
    constructor() {
        // Efecto para limpiar la información de pago al cambiar el método
        effect(() => {
            this.paymentMethod();
            this.paymentInfo.set('');
        });
    }

    // Handlers para actualizar los signals del formulario
    updateDeliveryTime(event: any): void {
        this.deliveryTime.set(String((event.target as HTMLInputElement).value));
    }

    updateAddress(event: any): void {
        this.address.set(String((event.target as HTMLTextAreaElement).value));
    }

    updatePaymentMethod(method: 'card' | 'bizum'): void {
        this.paymentMethod.set(method);
    }

    updatePaymentInfo(value: string | number): void {
        const strValue = String(value);
        this.paymentInfo.set(strValue.replace(/[^0-9]/g, ''));
    }

    // Lógica de Validación
    private validateForm(): boolean {
        const errors: string[] = [];

        // 1. Validar Hora (formato HH:MM)
        if (!this.deliveryTime() || !this.deliveryTime().match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
            errors.push('La Hora de Entrega no es válida (formato HH:MM).');
        }

        // 2. Validar Dirección
        if (!this.address() || this.address().trim().length < 10) {
            errors.push('La Dirección de Reparto es obligatoria y debe ser detallada (mínimo 10 caracteres).');
        }

        const info = this.paymentInfo();
        const method = this.paymentMethod();
        
        // 3. Validación de Pago Condicional
        if (method === 'card') {
            if (info.length !== 16 || !/^\d{16}$/.test(info)) {
                errors.push('El Número de Tarjeta debe tener exactamente 16 dígitos.');
            }
        } else if (method === 'bizum') {
            if (info.length !== 9 || !/^\d{9}$/.test(info)) {
                errors.push('El Número de Teléfono (Bizum) debe tener exactamente 9 dígitos.');
            }
        }

        this.validationErrors.set(errors);
        return errors.length === 0;
    }

    // Lógica de Acción de Pago
    onSubmit(): void {
        if (!this.cartNotEmpty()) {
            this.validationErrors.set(['No puedes pagar, el carrito está vacío.']);
            return;
        }

        if (!this.validateForm()) {
            return; 
        }

        const details: PaymentDetails = {
            deliveryTime: this.deliveryTime(),
            address: this.address().trim(),
            paymentMethod: this.paymentMethod(),
            paymentInfo: this.paymentInfo()
        };

        this.paymentComplete.emit(details);
    }

    // Lógica de Acción de Limpiar
    handleClear() {
        this.deliveryTime.set('');
        this.address.set('');
        this.paymentMethod.set('card');
        this.paymentInfo.set('');
        this.validationErrors.set([]);
        this.clearOrder.emit();
    }
}