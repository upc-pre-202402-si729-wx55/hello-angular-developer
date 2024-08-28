import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterDeveloperComponent} from "./welcoming/components/register-developer/register-developer.component";
import {WelcomeComponent} from "./welcoming/components/welcome/welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterDeveloperComponent, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular-developer';
  firstName: string = 'Unknown';
  lastName: string = '';

  onDeveloperRegistered(developer: { firstName: string, lastName: string }) {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }
}
