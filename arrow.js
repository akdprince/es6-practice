// function doubleIt(num){
//     return num*2;
// }

const doubleIt = num => num * 2; //single parameter es6 function or arrow function.

const addNumber = (num1, num2) => num1 + num2; //two or more parameter es6 function.

const bigger = (x, y) => {
    const sum = x+y;
    const sub = x-y;
    const multiplication = sum * sub;
    return multiplication;

}

const result3 = bigger(12,4);
console.log(result3);

const result1 = addNumber(14,25);
// console.log(result1);

const result = doubleIt(114);

// console.log(result);