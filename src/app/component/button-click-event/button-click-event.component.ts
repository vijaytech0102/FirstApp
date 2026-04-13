import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-click-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-click-event.component.html',
  styleUrl: './button-click-event.component.css'
})
export class ButtonClickEventComponent {
  
  // 9. Button Click Event
  clickCount: number = 0;
  lastClickTime: string = 'Never';
  eventLog: string[] = [];
  
  onButtonClick(): void {
    this.clickCount++;
    const now = new Date().toLocaleTimeString();
    this.lastClickTime = now;
    console.log(`Button clicked at ${now} - Total clicks: ${this.clickCount}`);
    this.eventLog.push(`Click #${this.clickCount} at ${now}`);
    
    if (this.eventLog.length > 5) {
      this.eventLog.shift(); // Keep only last 5 events
    }
  }
  
  resetCounter(): void {
    this.clickCount = 0;
    this.lastClickTime = 'Never';
    this.eventLog = [];
    console.log('Counter reset');
  }
  
  clearLog(): void {
    this.eventLog = [];
  }
}
