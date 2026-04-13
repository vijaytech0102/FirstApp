import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-event-handling',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-event-handling.component.html',
  styleUrl: './input-event-handling.component.css'
})
export class InputEventHandlingComponent {
  
  // 10. Input Event Handling
  userInput: string = '';
  eventLog: { event: string; value: string; timestamp: string }[] = [];
  
  onInput(event: any): void {
    this.userInput = event.target.value;
    this.logEvent('Input event', this.userInput);
  }
  
  onChange(event: any): void {
    this.logEvent('Change event (on blur)', event.target.value);
  }
  
  onKeyup(event: any): void {
    this.logEvent('Keyup event', this.userInput);
  }
  
  onKeydown(event: any): void {
    this.logEvent('Keydown event', this.userInput);
  }
  
  private logEvent(eventType: string, value: string): void {
    const now = new Date().toLocaleTimeString();
    this.eventLog.push({
      event: eventType,
      value: value || '(empty)',
      timestamp: now
    });
    
    if (this.eventLog.length > 10) {
      this.eventLog.shift();
    }
  }
  
  clearLog(): void {
    this.eventLog = [];
  }
  
  clearInput(): void {
    this.userInput = '';
    this.eventLog = [];
  }
}
