// // this all work available "in steo 05 f" , "sir ziya repo"
// //UNION TYPES
// function Printid(id : number |string){
//     if(typeof id == "string"){
//       console.log(id.toUpperCase()) 
//     }else{
//         console.log(id)
//     }
// }
// Printid("alina") // is per if chala hay
// Printid(7)       // is par else chala hy 
// //Anonymous function
// const names = ["alina" , "khan" , "zohaib"]
// names.forEach(function(s){
//     console.log(s.toUpperCase())
// })
// names.forEach ((s) =>{
//     console.log(s.toUpperCase())
// })
// //********************************************TYPE ALIASIS 
// //A type alias is exactly that - a name for any type. The syntax for a type alias is:
// //We’ve been using object types and union types by writing them directly in type annotations. 
// //                            //TYPE ALIAS//
// type point = {
//     x: number
//     y: number
// }
// function printcoord(pt : point){
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's x value is" + pt.y)
// }
// printcoord({x : 3 , y : 7})
// //                                 //TYPE INFERACE//
// interface Point {
//     x: number;
//     y: number
// }
//     function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 100, y: 100 });
//OPTIONAL PROPERTIES
function meet(obj) {
}
meet({ x: "alina", y: "unknown" });
meet({ x: "you" }); // ? laga dea tha jbhe error ni aya
meet({ x: "ali" });
// // //**********************************************did not get
// function printName(obj: { first: string; last?: string }) {
//     // Error - might crash if 'obj.last' wasn't provided!
//     //console.log(obj.last.toUpperCase());
//   //'obj.last' is possibly 'undefined'.
//     if (obj.last !== undefined) {
//       // OK
//       console.log(obj.last.toUpperCase());
//     }
// }
// printName("ali")
// ///**********************************************UNION TYPES
// //Let’s write a function that can operate on strings or numbers:
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
//   // Error
//   printId({ myID: 22342 });
// function appreciation(name : number | string){
//     if (typeof name === "string"){
//      console.log(name.toUpperCase())
//     }else{
//       console.log(name)  
//     }     
// }
// appreciation("Alina")
// appreciation(7643)
// //IT Will generate error here
// function getout(name : string | number){
//     console.log(getout.uppercase())
// // }       // kyu ky upar 2 types define hain agar() my num dydea tw function kaisay chllyga is lea abh error agya
// // //inferace or alias 1 he hain type say strt hota hy type alias
// //***************************************************************NEVER */
// function infiniteLoop() : never {
//   while (true){}
// }
// //never
// let color = "red" 
// switch (color){
//     case "green":
//     console.log("Green")
//     break;
// case "red":
//     console.log("red")  
//     break;  
// default:
//   error(color)  
//     break;
// } 
//***************************************************************************ANY */
// /
var namE = 7; //here
namE = 7;
namE = 6;
namE = "ali"; //last value may  assign ni kea
console.log(namE.toUpperCase());
