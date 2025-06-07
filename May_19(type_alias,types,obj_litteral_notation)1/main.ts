// // // [] = by this strickly follow type // Error will generate
// // // We learn how we can increase types as much we want
// // let numbers : number[] = [1, 2, 3 ,4 , 5 , "name"]

// // //////////////// We learn how we can increase types as much we want///////////////////////
// // ////////////////////////"""Type Alias Method"""///////////////////////////////////
// // // We learn how we can increase types as much we want
// // // In this method we can generate types that much we want
// // let example : string | number | boolean |number[] // = 12345;

// // //Now we can asign String , Boolean
// // example = "ali"
// // example = true
// // example = 80
// // console.log(example)

// // //////////////////////////How we use "Alias" method through "type"/////////////////////////////////////////////////
// // // // let numbers = "ali" 
// // // // 2 type bana kr unko merge krskty hain
// // // /////type aik bar likhengay


// // let usrNames : MyType = "alina" , 8 , true
// // let example1 : MyType = "aLI"
// // type MyType = string | number[] | boolean | number //MyType3| 
// // example1 = 12345
// // example1 = 123
// // example1 ="username"  
// // example1 = true
// // example1 = [1 , 2 ,3]

// // //If we give types in [ ] , we have to assign value in []

type MyType2 = [string | number |number |boolean]
let MyType2 = []
let example4: MyType2 = [12345]
let example5: MyType2 = [123]
example4 = ["username"]  
example4 = [true]

// // // ///////////////////////Second method of making "Array"///////////////////////////////////////
// // type MyType3 = string | number |number | boolean
// // let numbers3 : Array<MyType3> = ["Alina" , true , 3 , 4]

// // //////////////////////////// "Types" in Tuples //////////////////////////////////////////////////
// // //****IF we give "Types" in Tuples we have to assign value as we defined in tuples

// // type MyType4 = [string , Boolean , number ,number[] ]
// // let numbers4 : MyType4 = ["Alina" , true    , 8 , [1 , 2 ,3]]

// // //*******Other wise it generate errors
// // type MyType5 = [string , Boolean , number , number[]] 
// // let numbers5 : MyType5 =  [5144 , "Alina" , [1 , 2 ,3] , 64]


// // /////////////////////Why we learn objects/////////////////////////////////
// // //****2 ways of print through object
// let obj = {
//    fname : "hina" , // type infer
//    age : 24
// }
// console.log(obj.fname)        // .notation
// console.log(obj["age"])       // square [] 
// console.log(this.fname)    // undefined kardayga kyu ky" this. " type alias may kaam krta hy 
           
        ///////object litteral notation = {.}///////////
/////////////////////////Alias Method///////////////////////////////////
//*****Alias may type dalty hain let ni

// type person = {
//    "fname" : string,  // data type define kea hy //" " may likh kr error ni aya
//     height : number | boolean
//     isgirl? : boolean
//     greet1() : void;
// }
// // //object litteral notation
// let obj1 : person = {
//    fname : "Alina",
//    height : 21,
   
// }
// let person2 : person  = {
//     fname :  'ayesha',   // apply kardea hay
//     height : 24.5,
//     // isStudent : true,   
//     greet1 : function() {          /// annonymus agar fuction ka name ni ho tw
//     console.log(`Hello, my name is "  ${this.fname}` )
//       //this dot type alias may work krta hay                      
//    }
// }
    
// person2.greet1()

// // /////////////////practice////////////////////////////////
// // /////////////////////////// can use  many types////////////
// // let hello : string | Boolean | number
// // hello = true , "alina" , 123 , 58
// // hello = "Alina"
// // hello = 9
// // hello = true
// // console.log(hello)

// // ///////use of type in the place of let/////////////////

// // type myTypE = string | Boolean | number
// // let shoping :Array<myTypE> = ["alina" , 34 , true]

// ////////////////if we use commaaa instead of pipe | ////////

// // type MYtype = [string , boolean , number]
// // let shoping1 = ["Alina" , true , 76]

// // /////will be assign value in tuples[]
// // shoping1 = ["alirehman"]
// // console.log(shoping1)

type idcard =  {
    name : string,
    nicNo : number
    class? : string
}
let obj : idcard = {
    name : "Ali",
    nicNo : 423098,
    // class : "karachi"
}
let obj2 : idcard = {  //dubara types use krlin
    name : "Aliza",
    nicNo : 43567890, 
    class : "Twelve"
}
let information = {  //iska upar waly say koi taluk ni hay
    name : "Alina",
    nicNo : 4401256,  
    nicInformation : function (){
    console.log("Her name is " + this.name + " her nicNo is  " + this.nicNo)
}
} 
information.nicInformation()

// //**************************************************type alias only does not use with objects see how??? */

// // Primitive Type Aliases
// type Name = string;
// type Age = number;
// type IsActive = boolean;

// const myName: Name = "John";
// const myAge: Age = 30;
// const userActive: IsActive = true;

// Object Type Alias
type User = {                            // // Primitive Type Aliases
  name: string;                           //Object Type Alias
  age: number;                          // // Array Type Alias
  email: string;                        // // Tuple Type Alias
};                                       //union type alias
                                            // Tuple Type Alias
const user: User = {                     //intersection type 
                                            //function type
  name: "Alice",
  age: 25,
   email: "alikjh"
};
const _user : User = {
    name : "ali",
    age : 65,
    email : "allikjh"
}






// // Array Type Alias
// // simple type bh dayskty mgr is tarah type dyny ky 2 faiday hongaay
// //****baar bar type use hojayegi  */
// //**** 1 say zada type daysken*/
// type StringArray = string[];
// type NumberArray = number[];

// const names: StringArray = ["Alice", "Bob", "Charlie"];
// const numbers: NumberArray = [1, 2, 3, 4, 5];

// // Tuple Type Alias
// type Point = [number, number];
// type PersonTuple = [string, number];

// const point: Point = [10, 20];
// const personTuple: PersonTuple = ["Alice", 25];

// // Union Type Alias
// type ID = string | number;
// type Status = "success" | "error" | "loading";

// const userId: ID = "abc123";
// const requestStatus: Status = "success";

// // Intersection Type Alias
// type HasName = {
//   name: string;
// };             

// type HasAge = {
//   age: number;
// };

// type PerSon = HasName & HasAge;

// const detail : PerSon = {
//   name: "Alice",
//   age: 25
// };

// // Function Type Alias
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;

// console.log(add(5, 3)); // Output: 8

// // Array Type Alias
// // object type alias
// // Primitive Type Aliases

// /********************************************************************************************interfaces */

// interface member {
//      name : string
//      class : string
// }

// let classMember : member = {
//     name :"alina",
//     class : "master"
// }

// //type alias does not extend it type through this wa
// /*****************************************************can increase type through extend */
 
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "John Doe",
    age: 30,
    employeeId: 1234
};



//******************************************can merge through declaration */

interface company {
    name : string,
    
}

interface company {        //type alias does not merge through this way
    since : number
}

let comapnyDetail : company = {
    name :  "toyota company",
    since : 2017
}

//static properties and methods



// function _multiply (num1 : number , num2 : number) : number {
//      return num1 + num2  
//      }
//      multiply(2,4)

// function multiply(num1 : number , num2 : number) : void {
//     return num1 + num2
// }
// multiply(2,4)

 //practice uses of type alias

//Object Type Alias

type dress = {
        color : string;
        quantity : number;
}

const Dress : dress = {
        color : "red",
        quantity :  4
}

// // Array Type Alias
type gifts = string[]
const _gifts : gifts = ["toys" ," watches"]
// // Tuple Type Alias
type result = [string , number]
const _result : result = ["maha" , 50]
//union type alias
type birthdays = string | number
const _birthdays : birthdays = 2001
//intersection type 
type toys = {
        name : string;
}
type babaToys = {
        _name : string;
}
type allToys = babaToys & toys

const _alltoys : allToys = {
        name : "doll",
        _name : "car"
}
                   //function typ

let a : string = "64"

function (){
    
}




