// // variable 

// // var   - global scope

// // let   - block scope

// // const - block scope


// // "javaScript"



// // rules 

// // var - GB


// var chocolateBox = 10   // declration // intialiazation

// chocolateBox     = 15   // reuse    // reIntialiazation

// var chocolateBox = 30   // reDeclration

// console.log(chocolateBox)


// // let 

// let a = 50      // dec   // intia

// a     = 60      // reuse // reInt

// // let a = 70   // not accept reDeclra

// console.log(a);


// // const 

// const b = 50  // dec // intia

// // b = 60     // reUse // ReIntia

// // const b = 70  // reDeclration

// console.log(b);


// var a = 10;
// var a = 20;
// console.log(a);  // 20 


// let x = 5;
// x = 8;
// console.log(x);  // 8 


// const p = 30;
// // p = 40;
// console.log(p);  // 30 


// var num = 100;
// num = 200;
// console.log(num); // 200 


// let count = 1;
// // let count = 2;
// console.log(count);  // 1


// const rate = 50;
// console.log(rate); // 50


// var a = 10;
// a = 15;
// var a = 25;
// console.log(a);  // 25


// const c = 10;
// c = 15;
// console.log(c);  // error - typeError


// var price = 99;
// price = 199;
// console.log(price);  // 199


// let mobile = 5000;
// mobile = 6000;
// console.log(mobile);  // 6000


// var car = "BMW";
// var car = "Audi";
// console.log(car);    // Audi


// let fruit = "Apple";
// let fruit = "Mango";
// console.log(fruit);   // error - syntex error 


// const city = "Delhi";
// city = "Mumbai";
// console.log(city);   // error - typeError


// var x = 1;
// x = 2;
// x = 3;
// console.log(x);  // 3


// let y = 100;
// y = 150;
// console.log(y);  // 150



// printing statements

// 1. console.log()

console.log(100);

var a = 50

console.log(a);

//2. alert()

// alert("hello guys this our first class!!!")

//3. confirm()

// confirm("did you like apple !")

//4. prompt()

// prompt("what is your name")


//5. document.writeln()

// document.writeln("hello")


// i want to print my name in console 

console.log("ben");

// i want to print ben name in ui Side

document.writeln("ben")

// i want to show hi message in ui side in pop way

// alert("hi")

// i want know suggestion from user ("did  u like apple")

// let userWish = confirm("did u like apple")

// console.log(userWish);


// i want to know user name

// let name1 = prompt("enter your name :-")

// console.log(name1);



// console methods

var a = 10

console.log(a)

console.warn(a)

console.error(a)

console.clear()


// dataTypes

// primitive DataTypes

// string -"",''

let b = "apple"

b = "123"

console.log(typeof(b));


// number

let c = 234

console.log(typeof(c));


// boolean

let d = true

console.log(typeof(d));


// undefined

let e;

console.log(e);


// null

// let f = prompt()

// console.log(f);



// non primitive DataTypes

// array

// []

let fruit = ["pineApple","apple","orange","banana","orange",true]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);

console.log(fruit[0]);
console.log(fruit[fruit.length-1]);


// object

// {}

let all = {
    yellowFruit   : ["pineApple","banana"] ,
    ExpansiveFuit : "apple",
    sameFruit     : "orange",
    notCoverFruit : true
}

console.log(all)
console.log(all.yellowFruit[0]);
console.log(all.ExpansiveFuit)
console.log(all.notCoverFruit);

console.clear()

// operator

// arithmetic operator

// meaning       operator

// addition        +

// subraction      -

// multiplication   *

// division         /

// modulus          %

// Exponencial      **


// increament (++)  = 1. post I , 2. pre I

// decreament (--)  = 1. post D, Pre D


console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(5 % 20);
console.log(5 ** 2); // 5^2 = 5*5 = 25


// increament (++) = +1

// post Inc  (var++)

let a1 = 1   // null

    a1 = ++a1

    console.log(a1); // 1


let a2 = 2    // 
let a3 = ++a2 // ++a2 = 1+2 = 3

console.log("a2 :-",a2); // a2 = 3
console.log("a3 :-",a3); // a3 = 3

let a4 = 1    // 
let a5 = ++a4 // ++a4 = 1+1 = 2
let a6 = ++a5 // ++ a5 = 1 + 2 = 3 

console.log("a4 :-", a4); // 1 1 1 1
console.log("a5 :-", a5); // 1 2 2 1
console.log("a6 :-", a6); // 2 3 1 2

// a4 = 2
// a5 = 3
// a6 = 3 

let a7 = 2   // 
let a8 = a7-- // a7 = 2

console.log("a7 :-",a7); // a7 = 1
console.log("a8 :-",a8); // a8 = 2

console.clear();


// assignment operator


let num = 10
let additionVal = 100

num %= additionVal // num = num + aV

console.log(num);


// comparision operator

//  meaning     opeartor     example   results

// lessThen        <          5<5        false

// greaterThen     >          10>2       true

// lessThenEq      <=          5<=5      true

// greaterThenEq   >=          10>=.10   true

// loosyTypeEq     ==          10=="10"  true

// StrictlyTypeEq  ===         10==="10" false

// loosyNotEq      !=          10!="10"  false

// strictlyNotEq  !==          10!=="10" true



6 < 9      // TRUE
14 > 18    // false
5 <= 10    // true
20 >= 20   // true
30 == "30" // true
40 === "40" // false
0 != "0"   // false
55 !== 55  // false
100 >= 99  // true
 2 < 1     // false

console.log(6 < 9);
console.log(14 > 18);
console.log(5 <= 10);
console.log(20 >= 20);
console.log(30 == "30");
console.log(40 === "40");
console.log(0 != "0");
console.log(55 !== 55);
console.log(100 >= 99);
console.log(2 < 1);


console.clear();


// logical operator

// And - (&&)

// true true false = false

// true false true = false

// true true true = true

// Or  - (||)

// true false false = true

// false false false  = false 

// Not - (!)

// !(true) = false
// !(false) = true


// AND (&&)
console.log(5 > 2 && 10 > 3)    // true && true = true
console.log(8 < 4 && 6 >= 6)    // false && true = false
console.log(20 >= 10 && 15 != 10) // true && true = true

// OR (||)
console.log(3 > 10 || 7 < 9)       // false || true = true
console.log(12 === "12" || 4 > 10) // false || false = false
console.log(5 < 2 || 9 <= 9)       // false || true  = true

// NOT (!)
console.log(!(10 > 5))    // !(true) = false
console.log(!(6 === "6")) // !(false) = true
console.log(!(3 <= 1))    // !(false) = true


// ternary operator

//  condition ? statement : statement 

let pwd = false

pwd ? console.log("welcome") : console.log("your pwd is wrong");


console.log(15==10);


console.clear();

console.log(10+10);

// Concatination (+)

let one = "hello"

let two = "world"

console.log(one+" "+two);


let three = "java"
let four  = "script" 

let finalVal = three +" "+four

console.log(finalVal);

// template string or litral

let five = "iron"
let six  = "man"

let totalVal = `${five} ${six}`

console.log(totalVal);



// type Conversion


// 1. implicit type conversion

// string

// string anything string

console.log(typeof("10"+"10"));
console.log(typeof("10"+10));
console.log(typeof("10"+true));
console.log(typeof("10"+undefined));
console.log(typeof("10"+null));
console.log(typeof("10"+[1,2]));
console.log(typeof("10"+{k:1}));


// number

console.log(typeof(10+"10"));
console.log(typeof(10+10));
console.log(typeof(10+true));
console.log(typeof(10+undefined));
console.log(typeof(10+null));
console.log(typeof(10+[1,2]));
console.log(typeof(10+{a:1}));

// boolean

console.log(typeof(true + "1"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));
console.log(typeof(true + [1,2]));
console.log(typeof(true + {s:2}));





// 2. explicit type conversion


// number

// Number() - number Constractor

console.log(typeof(10 + Number("10")));
console.log((Number()));
console.log((Number("")));
console.log((Number("12")));
console.log((Number("abc")));
console.log((Number(12)));
console.log((Number(true)));
console.log((Number(false)));
console.log((Number(undefined)));
console.log((Number(null)));
console.log((Number([1,2])));
console.log((Number({k:2})));


// boolean

// Boolean - boolean constarctor

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("12"));
console.log(Boolean("abc"));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(456));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1,2]));
console.log(Boolean({a:3}));


console.clear();


// Flow control Statement

// 1. conditional Statement

// 1. if statement

// if(condition){
//     // statement
// }

// condition  true = allow

if(5=="5"){
    console.log("i give condition true");
    
}

// 2. if else statement

// if(condition){
//     // statement
// }else{
//     // statement
// }

// condition true = if {work}  , false = else {work}

if(0){
    console.log("true");
    
}else{
    console.log("false");
    
}

// 3. else if statement

//    if(condition){
//     // statement
//    }else if(condition){
//     // statement
//    }else if(condition){
//     // statement
//    }else{
//     // statement
//    }

let time = 22

if(time >= 1 && time <= 10){
    console.log("good morning");   
}else if(time >= 11 && time <= 16){
    console.log("good Afternoon");
    
}else if(time >= 17 && time <= 19){
    console.log("good Evening");
    
}else{
    console.log("Good night");  
}

// 4. nested if statement

// if(condition){
//     if(condition){
//         if (condition) {
//             // statement
//         }else{
//             // statement
//         }
//     }else{
//         // statement
//     }
// }else{
//     // statement
// }


// uniform job eligible project

// let age = prompt("enter your age")
// let height = prompt("enter your height");
// let weight = prompt("enter your weight");

// if(age >= 18){
//     if(height >= 155){
//         if(weight >= 55){
//             alert("congratulation you are selected⭐⭐⭐");
            
//         }else{
//             alert("your weight is not eligible");
            
//         }
//     }else{
//         alert("your height is not eligible");
        
//     }
// }else{
//     alert(`your age is :- ${age} yr. so not eligible basic createria for 18 yr `);
    
// }



// 5. switch statement

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
// }



let trafficSignal = "green"

switch(trafficSignal){
    case "red" : console.log("stop the vechile"); break;
    case "yellow" : console.log("start the vechile"); break;
    case "green" : console.log("go the vechile"); break;
    
}

// 2. looping statement

// concatination (+)

let a11 = "spider"

let a12 = "man"

console.log(a11+" "+a12);


console.log(`${a11} ${a12}`);





console.log(typeof(10 + Number("10")));


console.clear();


// Looping Statement 

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// 1. for loop

// for(intialiazation; condition ; iteration){
//     // statement
// }

for(let i = 1; i<=50 ; i++){
    console.log(i); // 1 2 3 4 5
}

// i = 1 ; 1<=5 = true ; 1++ = 2
// i = 2 ; 2<=5 = true ; 2++ = 3
// i = 3 ; 3<=5 = true ; 3++ = 4
// i = 4 ; 4<=5 = true ; 4++ = 5
// i = 5 ; 5<=5 = true ; 5++ = 6
// i = 6 ; 6<=5 = false .

// odd number (1to10)

for(let a = 1; a<=10 ; a++){
    if(a%2==1){         // if(1%2==1){a = 1}
        console.log(a); // if(2%2==1){}
                        // if(3%2==1){a = 3}
                        // if(4%2==1){}
                        // if(5%2==1){a = 5}
        
    }
}

// a = 1 ; 1 <= 10 = true ; 1++ = 2
// a = 2 ; 2 <= 10 = true ; 2++ = 3
// a = 3 ; 3 <= 10 = true ; 3++ = 4
// a = 4 ; 4 <= 10 = true ; 4++ = 5
// a = 5 ; 5 <= 10 = true ; 5
console.clear();

// 2. while loop

// intialiazation 

// while(condition){
//     statement ;

//     iteration 
// }

let val1 = 5

while(val1>=20){

    console.log(val1);

    val1--
}

// val1 = 5 ; 5 >= 0 = true ; p = 5 ; 5-- = 4
// val1 = 4 ; 4 >= 0 = true ; p = 4 ; 4-- = 3
// val1 = 3 ; 3 >= 0 = true ; p = 3 ; 3-- = 2
// val1 = 2 ; 2 >= 0 = true ; p = 2 ; 2-- = 1
// val1 = 1 ; 1 >= 0 = true ; p = 1 ; 1-- = 0 
// val1 = 0 ; 0 >= 0 = true ; p = 0 ; 0-- = -1
// val1 = -1; -1 >= 0 = false . 

// 3. do while loop

// intialiazation 

// do {
//     statement; 
//     iteration
// }

// while(conditon)

let val2 = 5 

do {
  console.log(val2);
  val2--;
} 
while (val2 >= 0);

// 4. for of loop

// string , array , function

let str = "javascript"

for(let a of str){

    console.log(a);

}

let arr = ["apple","orange","banana"]

for(let b of arr){
    console.log(b);
    
}

// 5. for in loop

// object

let obj = {
    ename : "k",
    eROle : "developer",
    eSalary : 100000
}


for(let c in obj){
    console.log(obj[c]);
    
}


console.clear();



// function


// function one1(parameter){
//   // statement
// }

// one1(argument)


function first(){
    console.log("hello");
    
}

first()


function second(a,b){
    console.log(a);
    console.log(b);
    
}

second("hello",12)

let obj1 = {
    eName1 : "john",
    eRole : "trainee"
}

function therid(){
   console.log(obj1.eName1); 
}

therid()


function four1(a,b,c,d){
  console.log("a = ",a,"b =",b);
  console.log(c);
  console.log(d);
  
  
}

four1(12,21,23,45)



function random(a){
    console.log("hi");
    console.log("hello");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");

    console.log(a);
    
    
}

random("hello")
  

// date








