import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username:string = '';
password:string = '';
lastname:String='Y';

onLogin($event: Event) {
  console.log('Login button clicked');
  console.log('Username:', this.username);
  console.log('Password:', this.password);
}

onPasswordInput($event: Event) {
  this.password = ($event.target as HTMLInputElement).value;
throw new Error('Method not implemented.');
}

onUsernameInput($event: Event) {
  this.username = ($event.target as HTMLInputElement).value;
    this.username=this.username+this.lastname;
throw new Error('Method not implemented.');
}

}
