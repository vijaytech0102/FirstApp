import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpolation-ngmodel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interpolation-ngmodel.component.html',
  styleUrl: './interpolation-ngmodel.component.css'
})
export class InterpolationNgmodelComponent {
  
  // 5. Combining Interpolation & ngModel
  marks: number | null = null;
  result: string = '';
  
  updateResult(): void {
    if (this.marks !== null) {
      this.result = this.marks >= 40 ? 'Pass ✅' : 'Fail ❌';
    } else {
      this.result = '';
    }
  }
  
  resetMarks(): void {
    this.marks = null;
    this.result = '';
  }
  
  condition: boolean = true;
  valueIfTrue: string = 'Condition is TRUE';
  valueIfFalse: string = 'Condition is FALSE';
}
