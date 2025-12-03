import Customer from "./Customer"

const Customer1 = new Customer("Ana", 33, "ana@email.com", new Date(1992, 11, 27));
const Customer2 = new Customer("Ana Caroline Silva" ,35, "contato@ronaldo.com.br", new Date(2014,10,0));

console.log(Customer1.isAdult());
console.log(Customer1.getlastName());   
console.log(Customer2.isAdult());
console.log(Customer2.getFirstName());