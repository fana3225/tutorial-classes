export default class Customer {
    street!: string;
    district!: string;
    city!: string;
    state!: string;


    constructor(street: string, district: string, city: string, state: string, zipCode: string) {
    }
    tostring(): string {
        return this.street + ",", this.district + ",", + this.city + "," + this.state;
    }
}