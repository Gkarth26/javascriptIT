//function sayHello() {
  //  console.log('........');
   // console.log('hello!');
   // console.log('.........');
//}

//sayHello();

// function sayHello(name) {
//     console.log('........');
//     console.log('hello! ' + name);
//     console.log('.........');
// }

// sayHello('Bob');
// sayHello('sam');
// sayHello('Rich');

function calculateTax(amount){
    let result = amount * 0.25;
    return result;
}

let tax = calculateTax(100);
console.log(tax);