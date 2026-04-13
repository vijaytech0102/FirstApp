import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-class-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-class-binding.component.html',
  styleUrl: './multiple-class-binding.component.css'
})
export class MultipleClassBindingComponent {
  
  // 13. Multiple Class Binding using ngClass
  isHighlight: boolean = false;
  isBold: boolean = false;
  isPrimary: boolean = false;
  
  classes: { [key: string]: boolean } = {
    highlight: false,
    bold: false,
    primary: false,
    rounded: true,
    shadow: true
  };
  
  dynamicClasses: string[] = [];
  
  toggleClasses(): void {
    this.isHighlight = !this.isHighlight;
    this.isBold = !this.isBold;
    this.isPrimary = !this.isPrimary;
  }
  
  addClassToArray(className: string): void {
    if (!this.dynamicClasses.includes(className)) {
      this.dynamicClasses.push(className);
    }
  }
  
  removeClassFromArray(className: string): void {
    this.dynamicClasses = this.dynamicClasses.filter(c => c !== className);
  }
  
  toggleClassInObject(key: string): void {
    this.classes[key as keyof typeof this.classes] = !this.classes[key as keyof typeof this.classes];
  }
  
  resetStyles(): void {
    this.isHighlight = false;
    this.isBold = false;
    this.isPrimary = false;
    this.dynamicClasses = [];
    this.classes = {
      highlight: false,
      bold: false,
      primary: false,
      rounded: true,
      shadow: true
    };
  }
  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getCombinedClasses(): string[] {
    return ['demo-box', ...this.dynamicClasses];
  }
}
