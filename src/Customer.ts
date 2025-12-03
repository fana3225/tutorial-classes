export default class Customer {
    getlastName(): any {
        throw new Error("Method not implemented.");
    }
    isAdult(): any {
        throw new Error("Method not implemented.");
    }
    name: string ;
    age: number;
    email: string;
    birthDate: Date;
    address?: string;

    constructor(name: string, age: number, email: string, birthDate: Date, address?: string) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.age = new Date().getFullYear() - birthDate.getFullYear();
        this.address = address;
        
        }
    }

    isAdult(): boolean {
        return this.age >= 18;
    }
    getFirstName(): string {
        return this.name.split(" ")[0];
    }
    getlastName(): string {
        return this.name.split( "")[this.name.split(" ").length -1];
    }
}

function isAdult() {
    throw new Error("Function not implemented.");
}

