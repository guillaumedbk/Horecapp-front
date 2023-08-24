import {RestaurantType} from "./restaurant-type-enum.model";

export class RestaurantBody{
  constructor(
    public name: string,
    public restaurantType: RestaurantType,
    public address: string,
    public city: string,
    public postalCode: number,
    public country: string,
    public email: string,
    public phoneNumber: string,
    public password: string,
    public tvaNumber: string
  ) {}
}
