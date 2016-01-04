/**
 * Animal
 */
class Animal {
	constructor(public name :string){};
	respira(): string {
		return this.name + "Respirando..."
	}
}

/**
 * Cachorro extends Animal
 */
class Cachorro extends Animal {
	late(): string {
		return this.name + "Au au...";
	}
}

var chachorro = new Cachorro("Hector");
var animal = new Animal("Hector");
console.log(chachorro.late());
console.log(chachorro.respira());
console.log(animal.respira);


