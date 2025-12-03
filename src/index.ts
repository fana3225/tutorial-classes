import Customer from "./Customer"
import Address from "./address";

const address1 = new Address("Rua A", "Bairro B", "Cidade C", "Estado D", "12345-678");
const address2 = new Address("Rua X", "Bairro Y", "Cidade Z", "Estado W", "87654-321");

const Customer1 = new Customer("Ana", 33, "ana@email.com", new Date(1992, 11, 27));
const Customer2 = new Customer("Ana Caroline Silva" ,35, "contato@ronaldo.com.br", new Date(2014,10,0));

console.log(Customer1.isAdult());
console.log(Customer1.getlastName());   
console.log(Customer2.isAdult());
console.log(Customer2.getlastName());       
console.log(address1.tostring());
console.log(address2.tostring());       