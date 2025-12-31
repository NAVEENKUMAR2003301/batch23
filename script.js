// // // // variable 

// // // // var   - global scope

// // // // let   - block scope

// // // // const - block scope


// // // // "javaScript"



// // // // rules 

// // // // var - GB


// // // var chocolateBox = 10   // declration // intialiazation

// // // chocolateBox     = 15   // reuse    // reIntialiazation

// // // var chocolateBox = 30   // reDeclration

// // // console.log(chocolateBox)


// // // // let 

// // // let a = 50      // dec   // intia

// // // a     = 60      // reuse // reInt

// // // // let a = 70   // not accept reDeclra

// // // console.log(a);


// // // // const 

// // // const b = 50  // dec // intia

// // // // b = 60     // reUse // ReIntia

// // // // const b = 70  // reDeclration

// // // console.log(b);


// // // var a = 10;
// // // var a = 20;
// // // console.log(a);  // 20 


// // // let x = 5;
// // // x = 8;
// // // console.log(x);  // 8 


// // // const p = 30;
// // // // p = 40;
// // // console.log(p);  // 30 


// // // var num = 100;
// // // num = 200;
// // // console.log(num); // 200 


// // // let count = 1;
// // // // let count = 2;
// // // console.log(count);  // 1


// // // const rate = 50;
// // // console.log(rate); // 50


// // // var a = 10;
// // // a = 15;
// // // var a = 25;
// // // console.log(a);  // 25


// // // const c = 10;
// // // c = 15;
// // // console.log(c);  // error - typeError


// // // var price = 99;
// // // price = 199;
// // // console.log(price);  // 199


// // // let mobile = 5000;
// // // mobile = 6000;
// // // console.log(mobile);  // 6000


// // // var car = "BMW";
// // // var car = "Audi";
// // // console.log(car);    // Audi


// // // let fruit = "Apple";
// // // let fruit = "Mango";
// // // console.log(fruit);   // error - syntex error 


// // // const city = "Delhi";
// // // city = "Mumbai";
// // // console.log(city);   // error - typeError


// // // var x = 1;
// // // x = 2;
// // // x = 3;
// // // console.log(x);  // 3


// // // let y = 100;
// // // y = 150;
// // // console.log(y);  // 150



// // // printing statements

// // // 1. console.log()

// // console.log(100);

// // var a = 50

// // console.log(a);

// // //2. alert()

// // // alert("hello guys this our first class!!!")

// // //3. confirm()

// // // confirm("did you like apple !")

// // //4. prompt()

// // // prompt("what is your name")


// // //5. document.writeln()

// // // document.writeln("hello")


// // // i want to print my name in console 

// // console.log("ben");

// // // i want to print ben name in ui Side

// // document.writeln("ben")

// // // i want to show hi message in ui side in pop way

// // // alert("hi")

// // // i want know suggestion from user ("did  u like apple")

// // // let userWish = confirm("did u like apple")

// // // console.log(userWish);


// // // i want to know user name

// // // let name1 = prompt("enter your name :-")

// // // console.log(name1);



// // // console methods

// // var a = 10

// // console.log(a)

// // console.warn(a)

// // console.error(a)

// // console.clear()


// // // dataTypes

// // // primitive DataTypes

// // // string -"",''

// // let b = "apple"

// // b = "123"

// // console.log(typeof(b));


// // // number

// // let c = 234

// // console.log(typeof(c));


// // // boolean

// // let d = true

// // console.log(typeof(d));


// // // undefined

// // let e;

// // console.log(e);


// // // null

// // // let f = prompt()

// // // console.log(f);



// // // non primitive DataTypes

// // // array

// // // []

// // let fruit = ["pineApple","apple","orange","banana","orange",true]

// // console.log(fruit);
// // console.log(fruit[0]);
// // console.log(fruit[2]);

// // console.log(fruit[0]);
// // console.log(fruit[fruit.length-1]);


// // // object

// // // {}

// // let all = {
// //     yellowFruit   : ["pineApple","banana"] ,
// //     ExpansiveFuit : "apple",
// //     sameFruit     : "orange",
// //     notCoverFruit : true
// // }

// // console.log(all)
// // console.log(all.yellowFruit[0]);
// // console.log(all.ExpansiveFuit)
// // console.log(all.notCoverFruit);

// // console.clear()

// // // operator

// // // arithmetic operator

// // // meaning       operator

// // // addition        +

// // // subraction      -

// // // multiplication   *

// // // division         /

// // // modulus          %

// // // Exponencial      **


// // // increament (++)  = 1. post I , 2. pre I

// // // decreament (--)  = 1. post D, Pre D


// // console.log(1 + 2);
// // console.log(1 - 2);
// // console.log(1 * 2);
// // console.log(1 / 2);
// // console.log(5 % 20);
// // console.log(5 ** 2); // 5^2 = 5*5 = 25


// // // increament (++) = +1

// // // post Inc  (var++)

// // let a1 = 1   // null

// //     a1 = ++a1

// //     console.log(a1); // 1


// // let a2 = 2    // 
// // let a3 = ++a2 // ++a2 = 1+2 = 3

// // console.log("a2 :-",a2); // a2 = 3
// // console.log("a3 :-",a3); // a3 = 3

// // let a4 = 1    // 
// // let a5 = ++a4 // ++a4 = 1+1 = 2
// // let a6 = ++a5 // ++ a5 = 1 + 2 = 3 

// // console.log("a4 :-", a4); // 1 1 1 1
// // console.log("a5 :-", a5); // 1 2 2 1
// // console.log("a6 :-", a6); // 2 3 1 2

// // // a4 = 2
// // // a5 = 3
// // // a6 = 3 

// // let a7 = 2   // 
// // let a8 = a7-- // a7 = 2

// // console.log("a7 :-",a7); // a7 = 1
// // console.log("a8 :-",a8); // a8 = 2

// // console.clear();


// // // assignment operator


// // let num = 10
// // let additionVal = 100

// // num %= additionVal // num = num + aV

// // console.log(num);


// // // comparision operator

// // //  meaning     opeartor     example   results

// // // lessThen        <          5<5        false

// // // greaterThen     >          10>2       true

// // // lessThenEq      <=          5<=5      true

// // // greaterThenEq   >=          10>=.10   true

// // // loosyTypeEq     ==          10=="10"  true

// // // StrictlyTypeEq  ===         10==="10" false

// // // loosyNotEq      !=          10!="10"  false

// // // strictlyNotEq  !==          10!=="10" true



// // 6 < 9      // TRUE
// // 14 > 18    // false
// // 5 <= 10    // true
// // 20 >= 20   // true
// // 30 == "30" // true
// // 40 === "40" // false
// // 0 != "0"   // false
// // 55 !== 55  // false
// // 100 >= 99  // true
// //  2 < 1     // false

// // console.log(6 < 9);
// // console.log(14 > 18);
// // console.log(5 <= 10);
// // console.log(20 >= 20);
// // console.log(30 == "30");
// // console.log(40 === "40");
// // console.log(0 != "0");
// // console.log(55 !== 55);
// // console.log(100 >= 99);
// // console.log(2 < 1);


// // console.clear();


// // // logical operator

// // // And - (&&)

// // // true true false = false

// // // true false true = false

// // // true true true = true

// // // Or  - (||)

// // // true false false = true

// // // false false false  = false 

// // // Not - (!)

// // // !(true) = false
// // // !(false) = true


// // // AND (&&)
// // console.log(5 > 2 && 10 > 3)    // true && true = true
// // console.log(8 < 4 && 6 >= 6)    // false && true = false
// // console.log(20 >= 10 && 15 != 10) // true && true = true

// // // OR (||)
// // console.log(3 > 10 || 7 < 9)       // false || true = true
// // console.log(12 === "12" || 4 > 10) // false || false = false
// // console.log(5 < 2 || 9 <= 9)       // false || true  = true

// // // NOT (!)
// // console.log(!(10 > 5))    // !(true) = false
// // console.log(!(6 === "6")) // !(false) = true
// // console.log(!(3 <= 1))    // !(false) = true


// // // ternary operator

// // //  condition ? statement : statement 

// // let pwd = false

// // pwd ? console.log("welcome") : console.log("your pwd is wrong");


// // console.log(15==10);


// // console.clear();

// // console.log(10+10);

// // // Concatination (+)

// // let one = "hello"

// // let two = "world"

// // console.log(one+" "+two);


// // let three = "java"
// // let four  = "script" 

// // let finalVal = three +" "+four

// // console.log(finalVal);

// // // template string or litral

// // let five = "iron"
// // let six  = "man"

// // let totalVal = `${five} ${six}`

// // console.log(totalVal);



// // // type Conversion


// // // 1. implicit type conversion

// // // string

// // // string anything string

// // console.log(typeof("10"+"10"));
// // console.log(typeof("10"+10));
// // console.log(typeof("10"+true));
// // console.log(typeof("10"+undefined));
// // console.log(typeof("10"+null));
// // console.log(typeof("10"+[1,2]));
// // console.log(typeof("10"+{k:1}));


// // // number

// // console.log(typeof(10+"10"));
// // console.log(typeof(10+10));
// // console.log(typeof(10+true));
// // console.log(typeof(10+undefined));
// // console.log(typeof(10+null));
// // console.log(typeof(10+[1,2]));
// // console.log(typeof(10+{a:1}));

// // // boolean

// // console.log(typeof(true + "1"));
// // console.log(typeof(true + 1));
// // console.log(typeof(true + true));
// // console.log(typeof(true + undefined));
// // console.log(typeof(true + null));
// // console.log(typeof(true + [1,2]));
// // console.log(typeof(true + {s:2}));





// // // 2. explicit type conversion


// // // number

// // // Number() - number Constractor

// // console.log(typeof(10 + Number("10")));
// // console.log((Number()));
// // console.log((Number("")));
// // console.log((Number("12")));
// // console.log((Number("abc")));
// // console.log((Number(12)));
// // console.log((Number(true)));
// // console.log((Number(false)));
// // console.log((Number(undefined)));
// // console.log((Number(null)));
// // console.log((Number([1,2])));
// // console.log((Number({k:2})));


// // // boolean

// // // Boolean - boolean constarctor

// // console.log(Boolean());
// // console.log(Boolean(""));
// // console.log(Boolean("12"));
// // console.log(Boolean("abc"));
// // console.log(Boolean(0));
// // console.log(Boolean(-1));
// // console.log(Boolean(456));
// // console.log(Boolean(true));
// // console.log(Boolean(false));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));
// // console.log(Boolean([1,2]));
// // console.log(Boolean({a:3}));


// // console.clear();


// // // Flow control Statement

// // // 1. conditional Statement

// // // 1. if statement

// // // if(condition){
// // //     // statement
// // // }

// // // condition  true = allow

// // if(5=="5"){
// //     console.log("i give condition true");
    
// // }

// // // 2. if else statement

// // // if(condition){
// // //     // statement
// // // }else{
// // //     // statement
// // // }

// // // condition true = if {work}  , false = else {work}

// // if(0){
// //     console.log("true");
    
// // }else{
// //     console.log("false");
    
// // }

// // // 3. else if statement

// // //    if(condition){
// // //     // statement
// // //    }else if(condition){
// // //     // statement
// // //    }else if(condition){
// // //     // statement
// // //    }else{
// // //     // statement
// // //    }

// // let time = 22

// // if(time >= 1 && time <= 10){
// //     console.log("good morning");   
// // }else if(time >= 11 && time <= 16){
// //     console.log("good Afternoon");
    
// // }else if(time >= 17 && time <= 19){
// //     console.log("good Evening");
    
// // }else{
// //     console.log("Good night");  
// // }

// // // 4. nested if statement

// // // if(condition){
// // //     if(condition){
// // //         if (condition) {
// // //             // statement
// // //         }else{
// // //             // statement
// // //         }
// // //     }else{
// // //         // statement
// // //     }
// // // }else{
// // //     // statement
// // // }


// // // uniform job eligible project

// // // let age = prompt("enter your age")
// // // let height = prompt("enter your height");
// // // let weight = prompt("enter your weight");

// // // if(age >= 18){
// // //     if(height >= 155){
// // //         if(weight >= 55){
// // //             alert("congratulation you are selected⭐⭐⭐");
            
// // //         }else{
// // //             alert("your weight is not eligible");
            
// // //         }
// // //     }else{
// // //         alert("your height is not eligible");
        
// // //     }
// // // }else{
// // //     alert(`your age is :- ${age} yr. so not eligible basic createria for 18 yr `);
    
// // // }



// // // 5. switch statement

// // // switch(){
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // // }



// // let trafficSignal = "green"

// // switch(trafficSignal){
// //     case "red" : console.log("stop the vechile"); break;
// //     case "yellow" : console.log("start the vechile"); break;
// //     case "green" : console.log("go the vechile"); break;
    
// // }

// // // 2. looping statement

// // // concatination (+)

// // let a11 = "spider"

// // let a12 = "man"

// // console.log(a11+" "+a12);


// // console.log(`${a11} ${a12}`);





// // console.log(typeof(10 + Number("10")));


// // console.clear();


// // // Looping Statement 

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);


// // // 1. for loop

// // // for(intialiazation; condition ; iteration){
// // //     // statement
// // // }

// // for(let i = 1; i<=50 ; i++){
// //     console.log(i); // 1 2 3 4 5
// // }

// // // i = 1 ; 1<=5 = true ; 1++ = 2
// // // i = 2 ; 2<=5 = true ; 2++ = 3
// // // i = 3 ; 3<=5 = true ; 3++ = 4
// // // i = 4 ; 4<=5 = true ; 4++ = 5
// // // i = 5 ; 5<=5 = true ; 5++ = 6
// // // i = 6 ; 6<=5 = false .

// // // odd number (1to10)

// // for(let a = 1; a<=10 ; a++){
// //     if(a%2==1){         // if(1%2==1){a = 1}
// //         console.log(a); // if(2%2==1){}
// //                         // if(3%2==1){a = 3}
// //                         // if(4%2==1){}
// //                         // if(5%2==1){a = 5}
        
// //     }
// // }

// // // a = 1 ; 1 <= 10 = true ; 1++ = 2
// // // a = 2 ; 2 <= 10 = true ; 2++ = 3
// // // a = 3 ; 3 <= 10 = true ; 3++ = 4
// // // a = 4 ; 4 <= 10 = true ; 4++ = 5
// // // a = 5 ; 5 <= 10 = true ; 5
// // console.clear();

// // // 2. while loop

// // // intialiazation 

// // // while(condition){
// // //     statement ;

// // //     iteration 
// // // }

// // let val1 = 5

// // while(val1>=20){

// //     console.log(val1);

// //     val1--
// // }

// // // val1 = 5 ; 5 >= 0 = true ; p = 5 ; 5-- = 4
// // // val1 = 4 ; 4 >= 0 = true ; p = 4 ; 4-- = 3
// // // val1 = 3 ; 3 >= 0 = true ; p = 3 ; 3-- = 2
// // // val1 = 2 ; 2 >= 0 = true ; p = 2 ; 2-- = 1
// // // val1 = 1 ; 1 >= 0 = true ; p = 1 ; 1-- = 0 
// // // val1 = 0 ; 0 >= 0 = true ; p = 0 ; 0-- = -1
// // // val1 = -1; -1 >= 0 = false . 

// // // 3. do while loop

// // // intialiazation 

// // // do {
// // //     statement; 
// // //     iteration
// // // }

// // // while(conditon)

// // let val2 = 5 

// // do {
// //   console.log(val2);
// //   val2--;
// // } 
// // while (val2 >= 0);

// // // 4. for of loop

// // // string , array , function

// // let str = "javascript"

// // for(let a of str){

// //     console.log(a);

// // }

// // let arr = ["apple","orange","banana"]

// // for(let b of arr){
// //     console.log(b);
    
// // }

// // // 5. for in loop

// // // object

// // let obj = {
// //     ename : "k",
// //     eROle : "developer",
// //     eSalary : 100000
// // }


// // for(let c in obj){
// //     console.log(obj[c]);
    
// // }


// // console.clear();



// // // function


// // // function one1(parameter){
// // //   // statement
// // // }

// // // one1(argument)


// // function first(){
// //     console.log("hello");
    
// // }

// // first()


// // function second(a,b){
// //     console.log(a);
// //     console.log(b);
    
// // }

// // second("hello",12)

// // let obj1 = {
// //     eName1 : "john",
// //     eRole : "trainee"
// // }

// // function therid(){
// //    console.log(obj1.eName1); 
// // }

// // therid()


// // function four1(a,b,c,d){
// //   console.log("a = ",a,"b =",b);
// //   console.log(c);
// //   console.log(d);
  
  
// // }

// // four1(12,21,23,45)

// // console.clear();


// // function two2(a,b,c){
// //     console.log("name :-",a);
// //     console.log("age :-",b);
// //     console.log("department :-",c);
    
// // }

// // two2("praveen",23,"ece")
// // two2("kamal",23,"Ece")

// // console.clear();


// // // function types

// // // 1. named function

// // three1("Argument")
// //     function three1(parameter){

// //         console.log("named function");
        
// //     }


// // // 2. Annonymous function


// // let Annonymous = function(parameter){
// //     console.log("Annoymous function");
    
// // }

// // Annonymous("Argument")

// // // 3. Arrow Function

// // let Arrow = (parameter)=>{
// //     console.log("Arrow function");
// // }

// // Arrow("Argument")

// // // Scopes

// // // var - "function scope" & "Global Scope"

// // // let - block scope

// // // const - block scope



// var a = 12

// console.log(a);


// let b = 10
// console.log(b);


// const c = 15

// console.log(c);


// function scopeCheck(){
//     if(true){
//         var a1 = "global scope"
//         let b1 = "block scope"
//         const c1 = "block scope const"
//         console.log(b1);
//         console.log(c1);
//     }

    
    
//     console.log(a1);
    
    
// }

// scopeCheck()

// // function types

// // 1. named function

// three1("Argument")
//     function three1(parameter){

//         console.log("named function");
        
//     }


// // 2. Annonymous function


// var Annonymous = function(parameter){
//     console.log("Annoymous function");
    
// }

// Annonymous("Argument")

// // 3. Arrow Function

// var Arrow = (parameter)=>{
//     console.log("Arrow function");
// }
// Arrow("Argument")



// // Self invoke function (IIFE)



// (function(parameter){
//     alert("welcome guys")
// })("argument")



// higher order function and callback function

function function1(){
    console.log("higher order function");
    
}

function function2(){
    console.log("Callback function");
    
}

function1(function2())


function add(callback,a,b){ // callback = sub, a = 20 , b = 40
    console.log(a+b); // 20 + 40 = 60
    callback(20,20)   // sub(20,20)
    
}

function sub(num1,num2){ // num1 = 20 , num2 = 20
    console.log(num1-num2); // 20 - 20 = 0
    
}


add(sub,20,40)



function a1(a,b,c){ // a = 20, b = b1 , c = 20
    console.log(c+a); // 20 + 20 = 40
    b(2,2)            // b1(2,2)
}

function b1(y,z){ // y=2 , z = 2
    console.log(z-y); // 0 
    
}

a1(20,b1,20)


// Generator function

function* gen(){
    yield "first Val"
    yield "second Val"
    yield "theird Val"
    yield "fourth Val"
}

let storeAllVal = gen()

console.log(storeAllVal.next().value);
console.log(storeAllVal.next().value);
console.log(storeAllVal.next().value);
console.log(storeAllVal.next().value);
console.log(storeAllVal.next());



function sub1(){
    console.log(10+20);
    
}

sub1()

function returnVal(){
    return 100
}

let newVal = returnVal();

console.log(newVal);


function add1(){
    console.log(newVal+20);
    
}

add1()

console.clear();


// Currying; 

function a1(x){
    return function b1(y){
        return function c1(z){
            console.log(x+y+z);
            
        }
    }
}

a1(10)(20)(30)


// un currying

function one11(){
    console.log("statement");
    
}

one11()

let annon = function(){
    console.log("statement");
    
}

annon()



// 11. Data Structure (ES6 Edition)
// • Spread operator

   // array and object 
   // [...],{...}
   // we can merge two array or object, we can take clone

   // array

   let ex1 = [1,2,3,4]
   let ex2 = [5,6,7,8]

   let total = [...ex1,...ex2,9,10]

   console.log(total);
   console.log(total);


   // object

   let ex3 = {
    name1 : "a",
    role  : "trainee",
    salary : 100000 
   }
   let ex4 = {
    name11 : "b",
    role1  : "developer",
    salary1 : 100000 
   }

   let totalMem = {...ex3,...ex4}

   console.log(totalMem);
   
   

// • Rest operator

   // (...)
   // we can store the multiple argument in single parameter inside


   let backendDataStore = function(a,...b){
    console.log(a);
    let storeRemainData = b
    console.log(storeRemainData);
    console.log(a+storeRemainData[1]);
    
    
   }

   backendDataStore(1,2,3,4,5,6,7,8,9,10)





// • Destructure


// Array

// normal method
let sam1 = [1,2,3,4]

let first1 = sam1[0]
let first2 = sam1[1]
let first3 = sam1[2]
let first4 = sam1[3]

console.log(first1+first4);

// destracture

let [x1,x2,x3,x4] = sam1

console.log(x1+x4);

// object

let sam2 = {
    name1 : "john",
    role  : "developer"
}

let role1 = sam2.role
let name11 = sam2.name1

console.log(role1);
console.log(name11);


let {name1,role} = sam2

console.log(name1);
console.log(role);


let nested = [1,2,3,[4,5,[6]]]

let net1 = nested[3][1]

console.log(net1);


let [z1,z2,z3,[z4,z5,[z6]]] = nested

console.log(z5);
console.log(z3);

console.clear();



// Array Advance Concept 


let nor1 = [1,2,3,4,5,"hello",true,undefined,null,[1,2],{a:3}]

console.log(nor1);
console.log(nor1[0]);
console.log(nor1[nor1.length-1]);

// homogenous

// hetrogenous

// flexible

// Manipulation: pop, push, shift, unshift, splice;

// condition :- 

// 1. if you do (add condition) will follow , you can (add multiple value)

// 2. if you do (remove condition) will follow , you can (remove one  value)

// Array manipulate method 

// pop() - we can remove array last value

let newArray = [1,2,3,4]

newArray.pop()

// push() - we can add the value in array last side

newArray.push(4,5,6,7)

// shift() - we can remove array first value

newArray.shift()

// unshift() - we can add the value in array first side

newArray.unshift(0,1)



console.log(newArray);


// splice // (starting Index , remove Count , Add the value)

let ex5 = [1,2,3,40,50,60,7,8]

ex5.splice(3,3,4,5,6)

console.log(ex5);


// Merge: concat, slice, flat, fill, includes, sort, indexOf, lastIndexOf, reverse;


// concat()

let ex6 = [1,2,3,4]
let ex7 = [5,6,7,8]

let concatVal = ex6.concat(ex7,9,10)

console.log(concatVal);


// slice()


let ex8 = [6,7,8,1,2,3,9,10]

let sliceVal = ex8.slice(3,6) // Starting Index, End Index + 1

console.log(sliceVal);


// flat()

let ex9 = [1,2,3,[4,5,6,[7,8,[9,[10,11,[12]]]]]]

let flatVal = ex9.flat(Infinity)

console.log(flatVal[flatVal.length-2]);


// fill()

let ex10  = [1,2,3,4] // 1, two , 3 , 4

ex10.fill("two",1,2) // value , Starting Index , Ending index + 1

console.log(ex10);


// includes()

let ex11 = [1,5,3,2]

let includesVal = ex11.includes(4)

console.log(includesVal);


// sort()

let ex12 = ["E",2,1000,9,65,532,4,7,"b"] // 2 > 1.000

let sortVal = ex12.sort()


console.log(sortVal);



// indexOf

let ex13 = [1,2,3,2,1]

let indexOfVal = ex13.indexOf(2,2) // value , from Index

console.log(indexOfVal);

// lastIndexOf

let ex14 = [1,2,3,2,1]

let lastIndexOfVal = ex14.lastIndexOf(2,2) // value,from Index

console.log(lastIndexOfVal);


// Reverse 

let ex15 = [1,2,3,4]

let reverseVal = ex15.reverse()

console.log(reverseVal);

console.clear();




// Array higher order method

let game = ["gta","god of war","cod","NFR"]

// forEach()

let newVal1 = game.forEach((currentElement,index,TotalArray)=>{
     return currentElement
})

console.log(newVal1);


// map()

let newVal2 = game.map((c,i,t)=>{
    return c
})

console.log(newVal2);


// filter()

let emp = [
    {eName : "a" , eSalary : 100000},
    {eName : "b" , eSalary : 200000},
    {eName : "c" , eSalary : 300000},
    {eName : "d" , eSalary : 400000},
    {eName : "e" , eSalary : 500000}
]

let newVal3 = emp.filter((c,i,t)=>{
   return c.eSalary > 200000
})

console.log(newVal3);




// find()

let newVal4 = emp.find((c,i,t)=>{
  return c.eSalary > 200000;
})

console.log(newVal4);


// reduce()

emp = [
  { eName: "a", eSalary: 100000 },
  { eName: "b", eSalary: 200000 },
  { eName: "c", eSalary: 300000 },
  { eName: "d", eSalary: 400000 },
  { eName: "e", eSalary: 500000 },
];

let newVal5 = emp.reduce((accumlator,c,i,t)=>{
    return accumlator + c.eSalary
    //  0 + 1 = 1
    //  1 + 2 = 3 
    //  3 + 3 = 6
    //  6 + 4 = 10 
    //  10 + 5 = 15

    // return 15 
},0) // 1 // 3 // 6 // 10 // 15

console.log(newVal5);


// array function higher order method

// sort()

let ran = [12,56,78,2,1,5]

//  1 2 5 15 56 78

let sortV = ran.sort()

console.log(sortV);

let sortval1 = ran.sort((a,b)=>{
   return b-a
})

console.log(sortval1);





// some() - or

let num = [1,2,3,4]

let newVal6 = num.some((c,i,t)=>{
return c%2==0

//  1%2==0 --> false
//  2%2==0 --> true
//  3%2==0 --> false
//  4%2==0 --> true
// false || true || false || true = true
})

console.log(newVal6);



// every() - And

let num1 = [2,2,2,2]

let newVal7 = num1.every((c,i,t)=>{
   return i%2==0

   // 0 % 2 == 0 t
   // 1 % 2 == 0 f
})

console.log(newVal7);// false


// array to string


let num2 = [1,2,3,4]

// toString()
let strVal = num2.toString()

console.log(typeof(strVal));

// join()

console.log((num2));

let joinVal = num2.join(0)

console.log(joinVal);

console.clear();



// String Methods


// charAt() index --> value

let str = "javascript"

let charAtVal = str.charAt(2)

console.log(charAtVal);

// charCodeAt()  index --> asscii value
 
let charCodeAtVal = str.charCodeAt(1)

console.log(charCodeAtVal);

// length

let lengthVal = str.length

console.log(lengthVal);

// slice()

str = "javaSCRipt";

let sliceVal1 = str.slice(4,10)

// starting Index , ending Index + 1

console.log(sliceVal1);

// toUpperCase()

let upper = str.toUpperCase()

console.log(upper);


// toLowerCase()

let lower = str.toLowerCase()

console.log(lower);

// trim()

let str1 = " hello world "

let trimVal = str1.trim()

console.log(trimVal);


// trim Start()

let trimStartVal = str1.trimStart()

console.log(trimStartVal);


// trim end()

let trimEndVal = str1.trimEnd()

console.log(trimEndVal);




// includes()

 str1 = " hello world ";

 let includesVal1 = str1.includes("o")

 console.log(includesVal1);
 

// split()

let str2 = "iron-man"

let splitVal = str2.split("n")

console.log(splitVal);


// indexOf()

let str3 = "developer"

let indexOfVal1 = str3.indexOf("e",2)
// value , from index
console.log(indexOfVal1);

// lastIndexOf()

let lastIndexOfVal1 = str3.lastIndexOf("e",2)

console.log(lastIndexOfVal1);

// replace()

let str4 = "python developer"

let replaceVal = str4.replace("python","javascript")


console.log(replaceVal);

// repeat()

let repeatVal = replaceVal.repeat(1)

console.log(repeatVal);


// startsWith()

let str5 = "hello"

let startVal = str5.startsWith("h")

console.log(startVal);



// endsWith()


let endVal = str5.endsWith("o")

console.log(endVal);

console.clear();



// Date

let Date1 = new Date()

console.log(Date1);


// get

// getFullYear()

let year = Date1.getFullYear()

console.log(year);

// getMonth()

let month = Date1.getMonth()

console.log(month);

// getDay()

let Day = Date1.getDay()

console.log(Day);

// getDate()

let date12 = Date1.getDate()

console.log(date12);

// getHour

let hour = Date1.getHours()

console.log(hour);

// getMinutes

let minutes = Date1.getMinutes()

console.log(minutes);

// getSeconds

let seconds = Date1.getSeconds()

console.log(seconds);


// set

let date1 = new Date

console.log(Date1);

// setFullYear

date1.setFullYear(2003)
console.log(date1);

// setmonth

date1.setMonth(0)

console.log(date1);

// setDate

date1.setDate(30)

console.log(date1);


// setHours

date1.setHours(15)

console.log(date1);

// setMinutes

date1.setMinutes(0)

console.log(date1);

// setSeconds

date1.setSeconds(0)

console.log(date1);


// locale strings


// time

let time = Date1.toLocaleTimeString()

console.log(time);

let date11 = Date1.toLocaleDateString()

console.log(date11);

let both = Date1.toLocaleString()

console.log(both);
















































  

// // // date








