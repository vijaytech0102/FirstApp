import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disable-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disable-button.component.html',
  styleUrl: './disable-button.component.css'
})
export class DisableButtonComponent {
  
  // 7. Disable Button Dynamically
  isDisabled: boolean = false;
  clickCount: number = 0;
  disabledReason: string = 'Form validation pending...';
  
  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
    this.clickCount++;
  }
  
  submitForm(): void {
    alert('Form submitted! Click count: ' + this.clickCount);
  }
  
  reset(): void {
    this.isDisabled = false;
    this.clickCount = 0;
  }
}
