import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string;

  markerContent(): string {
    return `
    <div>
    <h2>Company Name: ${this.companyName}</h2>
    <h5>catchPhrase ${this.catchPhrase}</h5>
     </div>`;
  }
}
