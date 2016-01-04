class Student{
	fullName: string;
	constructor(public firstName, public lastName){
		this.fullName = firstName + ' ' + lastName;
	}
}

interface IPerson{
	firstName: string;
	lastName: string;
}

var user = new Student("Henrique", "Moreira");



function say(person: IPerson){
	return "Hello " + person;
}
console.log(say(user));
