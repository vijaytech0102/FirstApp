import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditional-class-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional-class-binding.component.html',
  styleUrl: './conditional-class-binding.component.css'
})
export class ConditionalClassBindingComponent {
  
  // 12. Conditional Class Binding
  isActive: boolean = false;
  status: 'success' | 'warning' | 'error' | 'info' = 'info';
  
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
  
  setStatus(newStatus: 'success' | 'warning' | 'error' | 'info'): void {
    this.status = newStatus;
  }
}
