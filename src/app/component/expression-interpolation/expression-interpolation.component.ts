import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expression-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expression-interpolation.component.html',
  styleUrl: './expression-interpolation.component.css'
})
export class ExpressionInterpolationComponent {
  
  // 2. Expression in Interpolation - Calculations and transformations
  num1: number = 10;
  num2: number = 20;
  
  text: string = 'angular basics';
  
  // Array operations
  numbers: number[] = [5, 10, 15, 20];
  
  // Methods for calculations
  getSum(): number {
    return this.num1 + this.num2;
  }
  
  getProduct(): number {
    return this.num1 * this.num2;
  }
  
  getDifference(): number {
    return this.num2 - this.num1;
  }
  
  getArraySum(): number {
    return this.numbers.reduce((sum, num) => sum + num, 0);
  }
}
