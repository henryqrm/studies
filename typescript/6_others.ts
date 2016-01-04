class Person{
	constructor(public name:string){};
}

class Company{
	constructor(public companyName:string){};
}

interface ICompany{
	register():void;
}
class FoodCompany implements ICompany{
	constructor(public companyName:string){};
	register():void{};	
}

class Custumer extends Person {
	static points: number = 0;
	private _name:string;
	constructor(public name:string, public document:string){
		super(document);
		this._name = name;
		Custumer.points++;
	}
	register():void{};
}
var comp = new FoodCompany('Salgadinhos');
var c =  new Custumer("Henrique", '1234');
c.register();
Custumer.points;