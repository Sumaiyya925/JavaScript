// let person ={
// name:'sumaiyya',
// age:19
// };
// person.name='mosh'
// console.log(person.name);

// let courseNames = ['html','CSS','JavaScript'];
// //I can aslo change the values of the array dynamically
// courseNames[3] = 1;
// console.log(courseNames[3]);

// //FUNCTIONS

// //PERFORMING A TASK FUNCTION
// function pookie(name,lastname) {
//     console.log('hello '+ name + ' ' +lastname);
// }

// pookie('Aiza','pookie');

// //CALCULATING FUNCTION
// function calculator(number){
//    return number*number;
// }

// let result = calculator(43);
// console.log('The square of 43 is: ');
// console.log(result);

//TERNARY OPERATOR

// console.log('TERNARY OPERATOR');
// let customerPoints = 80;
// let typeOfCustomer = customerPoints>100 ? 'GOLD CUSTOMER' : 'SILVER CUSTOMER';
// console.log('The type of the customer is: ');
// console.log(typeOfCustomer);


//EXERCISE

// let a = 'red';
// let b = 'blue';

// console.log('The value of "a" before swapping is:');
// console.log(a);

// console.log('The value of "b" before swapping is:');
// console.log(b);

// let temp;
// temp = a;
// a = b;
// b = temp;

// console.log('The value of "a" after swapping is:');
// console.log(a);

// console.log('The value of "b" after swapping is:');
// console.log(b);

//if/else

let hour=20;

if(hour>=6 && hour<12){
    console.log('GOOD MORNING!');
}

else if(hour>=12 && hour<18){
    console.log("GOOD AFTERNOON!");
}

else{
    console.log("GOOD EVENING!");
}