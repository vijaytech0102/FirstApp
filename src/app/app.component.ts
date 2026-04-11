import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  // ===== 1. BASIC PROPERTIES (used for Interpolation) =====
  title = 'Welcome to Angular Basics Guide - First App';
  appVersion = '15.0';
  
  // ===== 2. TWO-WAY BINDING =====
  userName: string = ''; // Two-way binding with input field
  userEmail: string = '';
  
  // ===== 3. PROPERTY BINDING & ATTRIBUTE BINDING =====
  imageUrl: string = 'https://th.bing.com/th/id/OIP.xrCwH1HOg8PJJ2J4H5qaOAHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
  placeholder: string = 'Enter your name';
  isDisabled: boolean = false;
  
  // ===== 4. CONDITIONAL RENDERING (*ngIf) =====
  isLoggedIn: boolean = false;
  showDetails: boolean = false;
  userRole: string = 'admin'; // admin, user, guest
  
  // ===== 5. LIST RENDERING (*ngFor) =====
  students = [
    { id: 1, name: 'Rajesh', score: 85 },
    { id: 2, name: 'Priya', score: 92 },
    { id: 3, name: 'Amit', score: 78 },
    { id: 4, name: 'Neha', score: 88 }
  ];
  
  // ===== 6. CLASS & STYLE BINDING =====
  buttonClass: string = 'primary';
  isActive: boolean = true;
  backgroundColor: string = '#f0f0f0';
  fontSize: string = '16px';
  
  // ===== 7. EVENT BINDING =====
  clickCount: number = 0;
  
  // ===== 8. COMPUTED PROPERTIES =====
  get greeting(): string {
    return this.userName ? `Welcome, ${this.userName}!` : 'Welcome, Guest!';
  }
  
  get totalScore(): number {
    return this.students.reduce((sum, student) => sum + student.score, 0);
  }
  
  // ===== EVENT HANDLERS =====
  
  // Event Binding Example
  handleClick() {
    this.clickCount++;
    console.log('Button clicked', this.clickCount);
  }
  
  // Toggle Methods
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  
  // Clear form
  clearForm() {
    this.userName = '';
    this.userEmail = '';
  }
  
  // Add student to list
  addStudent() {
    const newStudent = {
      id: this.students.length + 1,
      name: this.userName || 'New Student',
      score: Math.floor(Math.random() * 100)
    };
    this.students.push(newStudent);
    this.clearForm();
  }
  
  // Remove student from list
  removeStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
  
  // Event with parameter
  deleteItem(index: number) {
    console.log('Deleting student at index:', index);
    this.removeStudent(index);
  }
}
