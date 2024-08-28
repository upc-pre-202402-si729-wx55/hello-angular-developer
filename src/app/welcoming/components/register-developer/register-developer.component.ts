import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

/**
 * RegisterDeveloperComponent is a standalone component that allows the user to register a developer.
 * @export
 * @class RegisterDeveloperComponent
 * @summary
 * The component has a form with two fields: first name and last name.
 * When the form is submitted, the component emits an event with the first name and last name of the developer.
 */
@Component({
  selector: 'app-register-developer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {
  developerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  /**
   * Emitted when a developer is registered.
   */
  @Output() developerRegistered = new EventEmitter<{ firstName: string, lastName: string }>();

  /**
   * Emits the developerRegistered event.
   * @summary
   * This method emits an event with the first name and last name of the developer.
   * @param firstName - The first name of the developer.
   * @param lastName - The last name of the developer.
   */
  onDeveloperRegistered(firstName: string, lastName: string) {
    this.developerRegistered.emit({ firstName, lastName });
  }

  /**
   * Handles the form submission
   * @summary
   * Extracts the first name and last name from the form and emits an event with the first name and last name.
   * If the first name or last name is not provided, it defaults to an empty string.
   */
  onSubmit() {
    let firstName = this.developerForm.value.firstName?.toString() ?? '';
    let lastName = this.developerForm.value.lastName?.toString() ?? '';
    this.onDeveloperRegistered(firstName, lastName);
  }
}
