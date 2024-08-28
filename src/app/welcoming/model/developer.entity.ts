/**
 * @name Developer
 * @summary
 * This entity represents a developer.
 * @export
 * @class Developer
 * @property {string} _firstName - First name of the developer
 * @property {string} _lastName - Last name of the developer
 */
export class Developer {
  private _firstName: string;
  private _lastName: string;

  /**
   * @summary
   * Creates an instance of Developer.
   * @param firstName - First name of the developer
   * @param lastName - Last name of the developer
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * @summary
   * Gets the full name of the developer.
   * @readonly
   * @type {string} - Full name of the developer
   */
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`.trim();
  }

}
