"use strict";
function Show(arg) {
    console.log(arg.id);
}
Show({ name: 'gaurav', age: 21, id: 4 });
let a;
a = 'Mori';
console.log(a);
a = 1;
console.log(a);
function display(arg) {
    console.log(arg);
}
display({ id: 1, name: 'Mori1' });
function display1(arg) {
    console.log(arg);
}
display1({ id: 1, name: 5 });
class Student1 {
    constructor() {
        this.id = 56545;
        this.name = "sarah";
        this.branch = "CSE";
    }
}
const student = new Student1();
console.log(student);
const anP = {
    displayT(id) {
        return id;
    }
};
console.log(anP.displayT("ID"));
console.log(anP.displayT(66));
