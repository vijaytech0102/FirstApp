import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  
  // 3. Two-Way Data Binding using ngModel
  userName: string = '';
  userGreeting: string = '';
  
  updateGreeting(): void {
    this.userGreeting = `Hello, ${this.userName}!`;
  }
  
  resetName(): void {
    this.userName = '';
    this.userGreeting = '';
  }
}
