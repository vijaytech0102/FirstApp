import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation-basics.component.html',
  styleUrl: './interpolation-basics.component.css'
})
export class InterpolationBasicsComponent {
  
  // 1. Interpolation Basics - Display user's name and age
  name: string = 'John Doe';
  age: number = 25;
  
  // Follow-up: What happens if undefined
  undefinedName: string | undefined = undefined;
  
  getHeading(): string {
    return 'Welcome to Interpolation Basics!';
  }
  
  getUserInfo(): string {
    return `${this.name} is ${this.age} years old`;
  }
}
