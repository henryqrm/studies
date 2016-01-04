/// <reference path="IStudent" />
/// <reference path="ISubscriber" />

module app{
	export class Student implements IStudent, ISubscriber{
		constructor( public name: string, public email:string, public isSubscriber:boolean, public age?:number){};
		
		register():void{
			console.log('Aluno criado!');			
		}
	}
}