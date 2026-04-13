import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-styling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {
  
  // 8. Dynamic Styling with Property Binding
  bgColor: string = '#e7f3ff';
  textColor: string = '#007bff';
  fontSize: number = 16;
  borderRadius: string = '5px';
  
  colors: { name: string; value: string }[] = [
    { name: 'Light Blue', value: '#e7f3ff' },
    { name: 'Light Green', value: '#d4edda' },
    { name: 'Light Yellow', value: '#fff3cd' },
    { name: 'Light Red', value: '#f8d7da' },
    { name: 'Light Purple', value: '#e2d5f0' }
  ];
  
  changeBgColor(color: string): void {
    this.bgColor = color;
  }
  
  increaseFontSize(): void {
    if (this.fontSize < 28) {
      this.fontSize += 2;
    }
  }
  
  decreaseFontSize(): void {
    if (this.fontSize > 12) {
      this.fontSize -= 2;
    }
  }
  
  resetStyles(): void {
    this.bgColor = '#e7f3ff';
    this.textColor = '#007bff';
    this.fontSize = 16;
    this.borderRadius = '5px';
  }
}
