import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combined-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combined-binding.component.html',
  styleUrl: './combined-binding.component.css'
})
export class CombinedBindingComponent {
  
  // 15. Combine Property + Event + Class Binding
  isActive: boolean = false;
  clickCount: number = 0;
  
  toggleActive(): void {
    this.isActive = !this.isActive;
    this.clickCount++;
    console.log(`Activation toggle #${this.clickCount} - Status: ${this.isActive}`);
  }
  
  reset(): void {
    this.isActive = false;
    this.clickCount = 0;
  }
}
