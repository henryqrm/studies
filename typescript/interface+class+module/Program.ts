/// <reference path="Student" />

module app{
	function run(student: IStudent){
		student.register();
	}
	var student = new Student('Henrique', 'henryqrm@gmail.com', true, 23);
	run(student);
}