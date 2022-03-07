import faker, { fake } from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: String;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string;

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
