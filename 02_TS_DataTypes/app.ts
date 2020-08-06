// string , number , boolean , undefined, null, enum , array , object , void , any
// string
let employeeName:string = 'John';
console.log(`Employee Name : ${employeeName}`);

// number
let employeeSalary:number = 85000;
console.log(`Employee Salary : ${employeeSalary}`);

// boolean
let isActive:boolean = true;
console.log(`is Active : ${isActive}`);

// undefined
let test:undefined = undefined;
console.log(`Test : ${test}`);

// null
let abc:null = null;
console.log(`ABC : ${abc}`);

// Array
let colors:string[] = ['white','black','purple','blue'];
console.log(colors);

// Object
let student:object = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};
console.log(student);

// enum
enum Month {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY',
    MAR = 'MARCH'
}
console.log(Month.JAN);

// void
let greet = function():void {
    console.log('Good Morning');
};
greet();

// any
let someVar:any = 'john';
someVar = 100;
someVar = [];
someVar = {};
someVar = function () {

};
console.log(someVar);


