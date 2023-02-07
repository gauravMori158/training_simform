type A = {
    name: string,
    age :number
}
type B ={
    name : string,
    id : number
}
type C = A & B;

function Show( arg : C)
{
    console.log(arg.id);
}

Show({name:'gaurav',age:21,id:4});

let a:string | number;

a='Mori';
console.log(a)
a=1
console.log(a)


interface genericExample <T> 
{
id:number,
name :T
}

function display(arg :genericExample<string>)
{
    console.log(arg)
}

display({id:1,name :'Mori1'})

function display1(arg :genericExample<number>)
{
    console.log(arg)
}

display1({id:1,name :5})



interface Student {
	id: number;
}

interface Student {
	name: string;
}

interface Student {
	branch: string;
 
}

class Student1 implements Student {
	id = 56545;
	name = "sarah";
	branch = "CSE";
}

const student = new Student1();
console.log(student);


interface dispT   {
    displayT(id: string);
}
interface dispT   {
    displayT(id: number);
}


const anP : dispT =
{
displayT(id)

{
    return id;


}}

console.log(anP.displayT("ID"));
console.log(anP.displayT(66));
