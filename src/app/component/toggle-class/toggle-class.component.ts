import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-class.component.html',
  styleUrl: './toggle-class.component.css'
})
export class ToggleClassComponent {
  
  // 14. Toggle Class on Click
  isHighlighted: boolean = false;
  toggleCount: number = 0;
  
  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
    this.toggleCount++;
  }
  
  resetToggle(): void {
    this.isHighlighted = false;
    this.toggleCount = 0;
  }
}
