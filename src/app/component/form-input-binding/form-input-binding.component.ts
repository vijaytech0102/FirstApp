import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-input-binding.component.html',
  styleUrl: './form-input-binding.component.css'
})
export class FormInputBindingComponent {
  
  // 4. Form Input Binding
  property: string = 'value';
  
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  isSubmitted: boolean = false;
  
  submitForm(): void {
    if (this.formData.name && this.formData.email) {
      this.isSubmitted = true;
      console.log('Form Data:', this.formData);
    }
  }
  
  resetForm(): void {
    this.formData = { name: '', email: '', phone: '', message: '' };
    this.isSubmitted = false;
  }
}
