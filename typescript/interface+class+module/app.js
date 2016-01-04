/// <reference path="IStudent" />
/// <reference path="ISubscriber" />
var app;
(function (app) {
    var Student = (function () {
        function Student(name, email, isSubscriber, age) {
            this.name = name;
            this.email = email;
            this.isSubscriber = isSubscriber;
            this.age = age;
        }
        ;
        Student.prototype.register = function () {
            console.log('Aluno criado!');
        };
        return Student;
    })();
    app.Student = Student;
})(app || (app = {}));
/// <reference path="Student" />
var app;
(function (app) {
    function run(student) {
        student.register();
    }
    var student = new app.Student('Henrique', 'henryqrm@gmail.com', true, 23);
    run(student);
})(app || (app = {}));
