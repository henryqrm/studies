interface IPerson{
	fistName: string;
	lastName: string;
}
var person = {
	fistName: "Henrique",
	lastName: "Rodrigues"
}
function say(person: IPerson){
	return "Hello " + person.fistName + " " + person.lastName;
}
console.log(say(person));