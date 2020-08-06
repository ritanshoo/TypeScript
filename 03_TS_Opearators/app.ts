// arithmetic operators , logical operators , conditional operators

// Arithmetic
let num1:number = 10;
let num2:number = 20;

console.log(`Sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// conditional operators
let marks:number = 75;
let result:string = '';
if(marks <= 35){
    result = 'You Failed the Exam';
}
else{
    result = 'You Cleared the Exam';
}
console.log(result);

// Logical Operator
let inRelation:boolean = true;
let parentsAgreed:boolean = false;
let message:string = '';
if(inRelation && parentsAgreed){
    message = 'Get Marry';
}
else{
    message = 'Wait until the parents agreed';
}
console.log(message);
