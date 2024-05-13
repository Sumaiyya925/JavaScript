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

// let hour=20;

// if(hour>=6 && hour<12){
//     console.log('GOOD MORNING!');
// }

// else if(hour>=12 && hour<18){
//     console.log("GOOD AFTERNOON!");
// }

// else{
//     console.log("GOOD EVENING!");
// }

//SWITCH

// let role = "moderator";

// switch(role){
//     case"guest":
//         console.log("GUEST USER");
//         break;
//     case "moderator":
//         console.log("MODERATOR USER");
//         break;

//         case "admin":
//             console.log("ADMIN USER");
//             break;

//             default:
//             console.log("UNKNOWN USER!");

// }

//LOOPS

//for loop

// for(let i=1; i<=6; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//while loop

// let i = 1;
// while(i<=6){
//     if(i%2==0) console.log(i);
//     i++;
// }


//for-in loop

// let person={
// name:'mosh',
// age:30
// };

// for(let key in person){
//     console.log(key,person[key]);
// }


//using for-in loop for arrays

// const colors=['red','purple','green'];

// for(let index in colors){
//     console.log(index,colors[index]);
// }

//In for-in loops we need to define both things bur by using for-of loop we only pass the keyword and this loop is essential to use for arrays
//like we only passed the variable 
// const colors2 = ['red','green','purple'];

// for(let color of colors2){
//     console.log(color);
// }



//BREAK STATEMENT
//jumps out of the loop
// let i = 0;
// while(i <= 10){

//     if(i === 5) break;
//     console.log(i);
//     i++;
// }

//CONTINUE STATEMENT
//jumps to the new iteration
// let i = 0;
// while(i<=10){

//     if(i%2 !== 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//EXERCISE
//make a function that takes two numbers and gives the maximum of the two

// function maxNumber(num1,num2){
    // if(num1>num2)
    //     return num1;
    
    // else
    //    return num2;

//    return (num1>num2) ? num1 : num2;
    

// }
//  let maxNum = maxNumber(93,199);

// console.log("THE MAXIMUM NUMBER IS: ",maxNum)

//EXERCISE 2:

// function isLandscape(width,height){

    //we do not have to explicitly write true or false only return and condition can return true or false

//     return (width > height);
// }


// console.log("result: ",isLandscape(900,500));

//EXERCISE:FIZZBUZZ
//not a number is NaN in javascript

// function fizzBuzz(number){

// if(typeof number !== 'number'){
//         return NaN;
//     }
// else if((number%3 === 0) && (number%5 !== 0)){
//     return 'fizz';
// }
// else if((number%5 === 0) && (number%3 !== 0)){
//     return 'buzz';
// }
// else if((number%3 === 0) && (number%5 === 0)){
//     return 'FizzBuzz'
// }

//     return number;
// }

// const output = fizzBuzz('7');
// console.log(output);

//EXERCISE:CHECK SPEED

// checkSpeed(300);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint){
//         console.log("OK");
//         return;
//     }
//     //calculating points at every 5km
//     else{
//         const points = Math.floor((speed - speedLimit )/5);
//         if(points < 12){
//             console.log("YOUR POINTS ARE: ",points);
//         }
//         else
//         console.log("LISENCE SUSPENDED YOU DUMB!");
//     }
// }

//EXERCISE: EVEN OR ODD

// function showNumbers(limit){

//     let i=0;
//     while(i<=5){
//             const result = (i%2 === 0 ? '"EVEN"':'"ODD"');
//         console.log(i,result);
//         i++;
    
//     }

// }

// showNumbers(5);

//EXERCISE: TRUTHY / FALSEY

const array = [1,2,3,null,'',undefined,0,NaN];

//falsey values are null , empty string , undefined , 0 , NaN

console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
        if(value)
            count++;
        return count;

}