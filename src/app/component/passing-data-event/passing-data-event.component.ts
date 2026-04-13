import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passing-data-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passing-data-event.component.html',
  styleUrl: './passing-data-event.component.css'
})
export class PassingDataEventComponent {
  
  // 11. Passing Data in Event Binding
  products = [
    { id: 101, name: 'Laptop', price: 50000 },
    { id: 102, name: 'Mobile', price: 30000 },
    { id: 103, name: 'Tablet', price: 20000 },
    { id: 104, name: 'Headphones', price: 5000 }
  ];
  
  selectedProduct: any = null;
  eventLog: string[] = [];
  
  onProductClick(product: any): void {
    this.selectedProduct = product;
    const message = `Selected: ${product.name} (ID: ${product.id}) - ₹${product.price}`;
    console.log(message);
    this.eventLog.push(message);
    
    if (this.eventLog.length > 5) {
      this.eventLog.shift();
    }
  }
  
  onEventData(event: any, productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      const message = `Event data - Product ID: ${productId}, Name: ${product.name}`;
      console.log(message);
      this.eventLog.push(message);
    }
  }
  
  addToCart(product: any): void {
    const message = `Added to cart: ${product.name} @ ₹${product.price}`;
    console.log(message);
    alert(message);
  }
  
  clearLog(): void {
    this.eventLog = [];
  }
}
