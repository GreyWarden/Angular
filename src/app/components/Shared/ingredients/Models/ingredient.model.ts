/* tslint:disable:variable-name */
export class Ingredient {
  private _name: string;
  private _amount: number;
  private _measurement: string;

  constructor (name: string, amount: number, measurement: string) {
    this._name = name;
    this._amount = amount;
    this._measurement = measurement;
  }

  get name (): string {
    return this._name;
  }

  set name (value: string) {
    this._name = value;
  }

  get amount (): number {
    return this._amount;
  }

  set amount (value: number) {
    this._amount = value;
  }

  get measurement (): string {
    return this._measurement;
  }

  set measurement (value: string) {
    this._measurement = value;
  }
}
