/// <reference path="Student" />
var app;
(function (app) {
    function run(student) {
        student.register();
    }
    var student = new app.Student('Henrique', 'henryqrm@gmail.com', true, 23);
    run(student);
})(app || (app = {}));
