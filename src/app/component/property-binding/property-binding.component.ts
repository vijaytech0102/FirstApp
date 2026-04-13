import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  
  // 6. Basic Property Binding - Image src binding
  imageUrl: string = 'https://th.bing.com/th/id/OIP.xrCwH1HOg8PJJ2J4H5qaOAHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
  alternateText: string = 'Angular Logo';
  imageTitle: string = 'Angular Official Logo';
  
  // Dynamic URLs
  urlString: string = 'https://via.placeholder.com/300x200?text=Placeholder+Image';
  
  changeImage(): void {
    this.imageUrl = 'https://th.bing.com/th/id/OIP.2uekIMrSR_0UnCZFBjKj4wHaD5?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
  }
  
  resetImage(): void {
    this.imageUrl = 'https://th.bing.com/th/id/OIP.xrCwH1HOg8PJJ2J4H5qaOAHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
  }
}
