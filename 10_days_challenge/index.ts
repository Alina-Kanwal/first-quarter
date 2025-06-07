// // //JavaScript میں متغیر کا اعلان روایتی طور پر var کلیدی لفظ کے ساتھ کیا جاتا ہے۔
// //************************************function with var */

import { log } from "console";

// function f() {
//   var message = "Hello, world!";
//   return message;
// }
// f()

// //i m not getting 2 here

// function f1() {
//     var a = 1;
//     a = 2;
//     var b = g();
//     a = 3;
//     return b;
//     function g() {
//       return a;
//     }
//   }
//   f1(); // returns '2'

// // //************************************************************not getting */
// function f2() {
//     var a = 10;
//     return function g() {
//       var b = a + 1;
//       return b;
//     };
//   }
//   var g = f2();
//   g(); // returns '11'

// //******************************************************did not get */

// function fName(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//       var x = 10;
//     }
//     // return x;
//   }
//   fName(true); // returns '10'tsc
  // fName(false); // returns 'undefined'

// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//       var currentRow = matrix[i];
//       for (var i = 0; i < currentRow.length; i++) {
//         sum += currentRow[i];
//       }
//     }
//     return sum;
//   }



//   for (var i = 0; i < 20; i++ ) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100 * i);
//   }

//******************************************************************let declaration */
//is my ye btaya gya hy ky block scope say bahat b ko phchana ni jarhaaa kyu ky b_scope my phchan hy iski
//   function f(input: boolean) {
//     let a = 100;
//     if (input) {
//       // Still okay to reference 'a'
//       let b = a + 1;
//       return b;
//     }
//     // Error: 'b' doesn't exist here
//     // return b;
//   }


// //*****************************************cant understand this code */
//we have same rule with "cath"
// catch is always used with try

// try {
//   throw "oh no!";
// } catch (e) {
//   console.log("Oh well.");
//   console.log(e)
// }
// // Error: 'e' doesn't exist here
// console.log(e);


//   //***************************************************** */
//agar a declare krny say phly return krdengy tw error dayga
  // function foo() {
  //    // okay to capture 'a'
  //   return a;
  // }
  // // illegal call 'foo' before 'a' is declared
  // // runtimes should throw an error here
  // foo();
  // let a;



//*******************************************************Re-declarations and Shadowing */ 
/*We can declare same variables in" var" in the same scope
/*We can not declare same variables in "let , const" in the same scope*/
//   function f(x) {
//     var x;
//     var x;
//     if (true) {
//       var x;
//     }

//   }
// let x = 10;
// let x = 20; // error: can't re-declare 'x' in the same scope


// function f(x: any) {
//   let x = 100; // error: interferes with parameter declaration
// }
 
// function g() {
//   let x = 100;
//   var x = 100; // error: can't have both declarations of 'x'
// }

/*****************************************************Block scope
if block            "it knows only in if block what we declare in f block"
function block      "it know in whole scope what we declare in function" */

// function f(input: boolean) {
//   let a = 100;
//   if (input) {
//     // Still okay to reference 'a'
//     let b = a + 1;
//     return b;
//   }
//                                       // Error: 'b' doesn't exist here
//   return b;                           // return a can be used
// }


// // Error: 'e' doesn't exist here
// console.log(e);

//we have same rule with "cath"
// catch is always used with try

// try {
//   throw "oh no!";
// } catch (e) {
//   console.log("Oh well.");
// }
// // Error: 'e' doesn't exist here
// console.log(e);

//*********************************************************declare before use */

// a++; // illegal to use 'a' before it's declared;
// let a;

//*********************************************************same problem */
// function foo() {
//   // okay to capture 'a'
//   return a;
// }
// // illegal call 'foo' before 'a' is declared
// // runtimes should throw an error here
// foo();

//***********************************************************************var and let */

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {      //if we use var it print it will print 10 time  "10"
//     console.log(i);             //
//   }, 100 * i);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {      //if we use var it print it will print 10 time  "10"
//     console.log(i);             //
//   }, 100 * i);
// }


function f1(condition : boolean, x : number )  {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}
console.log(f1(false, 20))
// f1(false, 0); // returns '0'
// f1(true, 0); 


// // var name = "alina";
// let name = "zuhaib"
// console.log(name)

// var name1 = 76;
// var name1 = "alina"

// function form(name : string){
//     return name 
// }
// form("alina")



//***********************************************************************Array destructuring */
// let input = [1, 2];
// let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second); // outputs 2

// first = input[0];
// second = input[1];

// swap variables
// [first, second] = [second, first];

// function fj([first, second]: [number, number]) {
//   console.log(first);
//   console.log(second);
// }
// fj([1, 2]);

// let [_first, ...rest] = [1, 2, 3, 4];
// console.log(_first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]


// let [, _second, , fourth] = [1, 2, 3, 4];
// console.log(_second); // outputs 2
// console.log(fourth); // outputs 4

//********************************************************************************************CONST */
//const have same rules same let but we can not re assign const

// const numLivesForCat = 9;
// const kitty = {
//   name: "Aurora",
//   numLives: numLivesForCat,
// };
// // // Error
// // kitty = {
// //   name: "Danielle",
// //   numLives: numLivesForCat,
// // };
// // all "okay"
// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;


// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    let x = 10;
  }
  return shouldInitialize;
}
f(true); // returns '10'
f(false); // returns 'undefined'

let o = {
  a: "foo",
  b: 12,
  c: "bar",
};
let { a, b } = o;


// let { a: newName1, b: newName2 } = o;

//Here the syntax starts to get confusing. You can read a: newName1 as ”a as newName1”. The direction is left-to-right, as if you had written:
// let newName1 = o.a;
// let newName2 = o.b;

// function keepWholeObject(wholeObject: { a: string; b?: number }) {
//   let { a, b = 1001 } = wholeObject;
// }
// keepWholeObject


//*******************************************************************tuple destructring */
// let tuple : [string , number , ] = ["alina" , 3 ]
// let [string , number , boolean ] = tuple // 3 type destructure ni krskty
// //we can not destructure a tuple beyond the range of its elements

//**********************************************************************obj destucturing */

// let o = {
//   a: "foo",
//   b: 12,
//   c: "bar",
// };
// let { a, b } = o;    //


// // Property renaming in JavaScript allows you to assign new variable names to properties of an object when using destructuring assignment.
// // For example:
// let { a: newName1, b: newName2 } = o;
// //This can be read as "assign o.a to newName1 and o.b to newName2", similar to:


// let newName1 = o.a;
// let newName2 = o.b;
// //If you need to specify types, you do so after the destructuring assignment:

// let { a: newName1, b: newName2 }: { a: string; b: number } = o;

// function keepWholeObject(wholeObject: { a: string; b?: number }) {
//   let { a, b = 1001 } = wholeObject;
// }
// keepWholeObject("alina")

//*******************************************************************************practise last night */

function stu(name : string) {
  console.log("hi " + name)
  return name
}
stu("ali")
let personName = stu("ali")  
console.log("hi " + personName)

function multiply(num1 : number , num2 : number){
  const Multiply = num1 * num2
  console.log("multiply " + Multiply)
  
}
multiply(3 , 5)

// let d : string[] = ["alina" , "bubli" , "rafy" , "hmzaa"]
// console.log(d.indexOf("alina"))
// console.log(d.length)
// console.log(d.pop())
// console.log(d.shift())
// console.log(d.unshift('iqra'))
// console.log(d.includes("alina"))
// console.log(d.includes("bubli" , 1))
// console.log(d.concat())
// //console.log(d.delete("hmzaa"))
// //console.log(d.replace("bubli" ,"sana" ))
// //console.log(d.find(""))
// console.log(d.reverse())
// console.log(d.join(" ,alii, "))
// console.log(d.toString())
// //console.log(d.find(""))
// console.log(d.push())
// //console.log(d.)




let _d : string[] = ["alina" , "bubli" , "rafy" , "hmzaa"]
console.log(_d.push("jamiil"))
console.log(_d)


