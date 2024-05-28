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

// const array = [1,2,3,null,'',undefined,0,NaN];

//falsey values are null , empty string , undefined , 0 , NaN

// console.log(countTruthy(array));

// function countTruthy(array){
//     let count = 0;
//     for(let value of array)
//         if(value)
//             count++;
//         return count;

// }

//EXERCISE: OBJECT PROPERTIES ONLY STRING PRINT

// const movie = {
//     name : '12th fail',
//     year : 2023,
//     ratings : 5,
//     director :'abc'
// };

// showProperty(movie);

// function showProperty(obj){
// for( let property in obj){
//     if(typeof obj[property] === 'string')
//         console.log(property,obj[property]);
// }
// }


//EXERCISE: SUM OF MULTIPLES OF 3 AND 5 UPTO THE LIMIT


// const limit = 20;

// console.log(sum(limit));

// function sum(no){
//  let i = 0;
//  let sum=0;
//  while(i<=no){
//     if(i%3 === 0 || i%5 === 0){
//         sum += i;
//     }
//     i++;
//  }
//  return sum;
// }

//EXERCISE: CALCULATE GRADE OF THE STUDENT

// const marks = [100,100,100];

// let Grade = console.log('THE GRADE OF STUDENT ARE: ',calculateGrade(marks),);



// function calculateGrade(marks){

//     let sum = 0;
    

//    for(let key of marks){
//     sum = sum + key;
//    }

//    let average = sum / marks.length;

//    if(average<60)
//     return 'FAILED';
   
//    if(average<70)
//     return 'D';

//    if(average<80)
//     return 'C';

//    if(average<90)
//     return 'B';

//    return 'A';
// }

//EXERCISE: PRINT STARS


// showStars(5);
// function showStars(rows){
//     for(let i=1; i<=rows; i++ ){
//         let pattern = '';
//         for(let j=0; j<i; j++){
//             pattern = pattern + '*';
//         }
//         console.log(pattern);
//     }
// }


//EXERCISE: DISPLAY PRIME NUMBERS


//  showPrimes(5);
// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }
// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) {
//     if (number % factor === 0) return false;
//   }
//   return true;
// }


//OBJECTS

//FACTORY FUNCTION

// function createCircle(radius,diameter,string){
//     // if the key and value are same we can just write radius instead of radius:value
//     return{
//         radius,
//         diameter,
//         draw(){
//             console.log(string);
//         }
//     };
// }

// const obj1 = createCircle(1,2,'circle');
// console.log(obj1);
// obj1.draw();

// const obj2 = createCircle(34,50,'rectangle');
// console.log(obj2);
// obj2.draw();

//CONSTRUCTOR FUNCTION

//we use new keyword to make a new object new do three things
//1:It creates an empty object
//2:It points "this" to the empty object
//3:It return "this" keyword

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("Constructor Function");
//     }
// }

// const obj3 = new Circle(1);
// console.log(Circle); 


//we use for in loop for object and for of loop for arrays generally but we can also use for of 
//loop for object like:

// const circle ={
//     radius : 1,
//     diameter :2
// };

// for(let key in circle){
//     console.log(key,circle[key]);
// }

// for(let key2 of circle){
//     console.log(key2); //it's not iterable so we can use Object.keys and Object.entries
// }

// for(let key of Object.keys(circle)){
//     console.log(key);
// }

//Object.entries also show the values

// for(let entry of Object.entries(circle)){
//     console.log(entry);
// }


//we use in operator to find whether a particular property is in the object or not

// if('diameter' in circle)
//     console.log('yes');


//THREE WAYS TO MAKE CLONE OF THE OBJECT

// const circle = {
//     radius :1,
//     draw(){
//         console.log("clone");
//     }
// };

// const clone={};

// for(let key in circle){
//     clone[key] = circle[key];
// }

// console.log(clone);

//second way
// where {} is the target object it can have some proprtities as well
// const clone = Object.assign({diameter:2},circle);

// console.log(clone);

//third way is to use spread operator i.e ...

// const clone = {...circle};
// console.log(clone);

//EXERCISE:MAKE ADDRESS OBJECT

// let address ={
//     street:'a',
//     city:'Karachi',
//     zipCode:'c'
// };

// newAddress(address);

// function newAddress(address){
// for(let key in address){
//     console.log(key,address[key]);
// }
// }


//EXERCISE:MAKE ADDRESS OBJECT USING FACTORY AND CONSTRUCTOR FUNCTION


//FACTORY FUNCTION
// function address(street,city,zipCode){
//     return {
//          street,
//          city,
//          zipCode
//     };
// }

// const addressobj1 = address('a','Karachi','b');
// console.log(addressobj1);

//CONSTRUCTOR FUNCTION

// function ShowAdress(street,city,zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const addressobj2 = new ShowAdress('abc','bali','b');
// const adddressobj3 = new ShowAdress('abc','bali','b');


//FUNCTION TO SHOW IF BOTH HAVE SAME PROPERTIES

// function areEqual(addressobj2,adddressobj3){
//     return addressobj2.street === adddressobj3.street &&
//     addressobj2.city === adddressobj3.city &&
//     addressobj2.zipCode === adddressobj3.zipCode; 
// }

// console.log("EQUAL FUNCTION PROPERTY WISE?");

// console.log("ANSWER",areEqual(addressobj2,adddressobj3));

// function areSame(address1,address2){
//   return address1 === address2;  
// }
 

// console.log("BOTH ARE SAME OBJECTS IN THE MEMORY?");
// console.log("ANSWER:",areSame(addressobj2,adddressobj3) );



//NEW CHAPTER ****ARRAYS****

//ADD ELEMEMT TO THE START END AND IN MIDDLE OF THE ARRAYS

// const array = [2,3,4];



//use push to insert at the end
// array.push(10,8);


//use splice to insert in middle
// array.splice(3,0,'new');


//use unshift to insert at the beginning

// array.unshift(54,93);
// console.log(array);

//we use "indexOf or includes operator to find whether a particular number or character is in the array or not if yes then result is
// the index otherwise it will return -1"


//TO FIND THE ELEMENTS IN NON-PRIMITIVE DATATYPES


//an array of multiple objects


//we have to find the element that contains abc course name for which we need to make function and pass 
//array into it inside the find function

// const courses = [
//     {id : 1, name : 'abc'},
//     {id : 2, name : 'xyz'}
// ];

// const requiredCourse = courses.findIndex(function(element){
//     return element.name === 'abc';
// })

// console.log(requiredCourse);

//ARROW SYNTAX
// in this syntax we remove the function keyword then we add arrow in front of the parameter of the function
// if there is only single parameter then we can remove the brackets around the parameter
// if there is only a single in the function then can also remove the return keyword and curly brackets

// const requiredCourses = courses.find(element => element.name === 'xyz');
// console.log(requiredCourses);

//REMOVE ELEMENTS
//use pop to delete the last element and shift to remove from the begining and splice for middle


//COMBINING AND SLICING TWO ARRAYS

// const first = [1,2,11];
// const second = [4,5,6];

// const combined = first.concat(second);
// console.log(combined);

//we can also use spread operator instead of concat faida ye k we can add anything in between as well

// const combined = [...first,'add',...second];
// const copy = [...combined];
// console.log(copy);

//sliced is kinda extracting from the array to an another array

// let sliced = combined.slice(2,5);
//  sliced = combined.slice(2);
// console.log(sliced);

//for primitive values the values are copied but for non primitives the address is copied like the objects are itslef not copied


//we can also use forEach method for iterating the array instead of using for of loop
//we can also show the index of each element by passing the index as well


// const numbers = [23,45,7,98];

// numbers.forEach(function(number,index){
//     console.log(index,number);
// })

//using arrow syntax

// numbers.forEach((number,index) => console.log(index,number));


//**** AFTER MIDS ****

//join and split

// const number = [12,23,45];

// const joined = number.join('-');
// console.log(joined);

// let msg = 'this is message';
// let parts = msg.split(' ');
// console.log(parts);

// let combined = parts.join('-');
// console.log(combined);


//SORTING ARRAYS

// const array = [50,40,30,20,25,35,45,55];
// array.sort();
// console.log(array);

//but what if we have an array of objects
// const courses = [
//      {id : 1, name : 'node.js'},
//      {id : 2, name : 'javaScript'}
// ];

// courses.sort(function(a,b){
//     let nameA = a.name.toLowerCase;
//     let nameB = b.name.toLowerCase;

//     if(nameA < nameB) return -1;
//     if(nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);


//EVERY AND SOME METHOD

//every checks that all the elements in the array should meet the condition
//while some checks that atleast one should meet the condition

// const number = [-23,-45,-8,4];

// let atleastOnePosiitve = number.some(value => value >= 0);

// console.log(atleastOnePosiitve);

//FILTER METHOD
//this methods adds only those elements to a new array and returns it that meets the condition hence filtering the array

// const array = [12,-1,23,45];
// const filtered = array.filter(value => value >= 0);



//MAP METHOD
//we use this to map each element in an array to something else


//here we are mapping the values to a string
// const items = filtered.map(n => '<li>' + n + '</li>' 
// );
// console.log(items);
//joining these parts

// const html = '<ul>' +  items.join(' ') + '</ul>';
// console.log(html);

//we can also map them in an object 
//like mapping these values to an object with the property value

// const items = filtered.map(n => ({value : n }));

// console.log(items);

//chaining

// const numbers = [1,-1,2,3];

// const filteredAndMapped = numbers.
// filter(n => n >= 0).
// map(n => ({value : n}));

// console.log(filteredAndMapped);

//REDUCING AN ARRAY
//we use reduce method to reduce an array into a single value

//here accumulator acts exacly like how we let a sum variable and initialized it to zero
//by not initializing accumulator to 0 it will initialize with the first value of the array and currentValue with -1 and
//addition is performed

// const number = [1,-1,4,5];

// const sum  = number.reduce((accumulator,currentValue) =>  (accumulator + currentValue) ,0);
// const sum = number.reduce((accumulator,currentValue) => (accumulator + currentValue));

// console.log(sum);

//its more cleaner then using the basic typical method for adding the numbers of the array

//EXERCISE 01
//SHOW THE NUMBERS FROM THE GIVEN RANGE

function arrayFromRange(min,max){

    const output = [];
    for(let i=min; i<=max; i++)
        output.push(i);
    return output;

}
const numbers = arrayFromRange(2,4);

console.log(numbers);