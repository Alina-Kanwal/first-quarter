// //wide = noreturn
// let a = 8 
// function greet5(num : number){
//         let a = 5
//         if (true){
//             let a = 9 * num
//             console.log(a)
//         }
//         // console.log(a)
//         return(a)
// // ///////////////rest parameter////////////////
// function addition
//            (num4 : number, 
//             num2 : number, 
//             num3: number = 0,
//             num1 : number = 0 ) {
//     return num4 + num2 + num3 + num1/// ye bh aik method hy btany ka ky kea return krna hy
// }
// console.log(addition(8,9,17, 78))
// let student1 = "alina"
// let student12 = "alinaa"
//                  //1    //2       //3  // length // address
//                  //0    //1       //2 // index 
// let students = ["ali", "alina", "alinaa","ayesha"]  /// array ky zarye save krna asan hojata hy
// console.log(students[4]) /// hum yahan index likhty hain  bracket rotation // undefined
// console.log(students.indexOf("alina"))
// console.log(students.indexOf("2")) // 2 ky bad wala 
// let _num = ["Ali" , "ali" , "ahsan", "Rana" , "wickey" , "talbia"]   ////////Splice///////////
// console.log(_num.length)
// console.log(_num.splice(2))
// console.log(_num.splice(4))
// console.log(_num.splice(5))   //length ki base par 5 tak values ko mita dayga array may say
// console.log(num.splice(2,4)) // 2 num ki surat my smjh ni arha
//                      ////////////Methods/////////////////////
//                         ///////////indexOf, length///////////
// let num = ["Ali" , "ali" , "ahsan", "Rana" , "wickey" , "talbia"] 
// console.log(num.indexOf("ali")) // ye btata hy index number jo array may hay uska
// console.log(num.length)           // () may value lzmi daynga jiska index pta karna hy
//                            /// shif , unshift , pop/////
// let num2 = ["Ali" , "ali" , "ahsan", "Rana" , "wickey" , "talbia"] 
// // console.log(num2.length)
// // console.log(num2.indexOf("wickey", ))
// // console.log(num2.unshift("maha")) // ye first ma add krta hy // console my humy length my izafa kardayga
// // console.log(num2)
// // console.log(num2.shift())  // ye first number print karta hy console may
// // console.log(num2)
// // console.log(num2.pop())     // remove last value and print last
// // console.log(num2)
// // /////////////////////////////////////////.Map method///////////////////////////////////////////////////
// //******we can change varaible 
// // let names: string[] = ["Hunain" , "Hyder" , "Ali" ] 
// // console.log(names.map(names => {
// //            if(names == "Ali"){
// //               names = "Abdullah"
// //            }
// //            return names
// // }))
// // console.log(names)
// // // 0 hunain if name== "Ali" number = "Abdullah"
// // // 1 Hyder if name == "Ali" number = "Abdullah"
// // // 2 Ali if name == "Ali" number = "Abdullah"
// // /////////////////////////////includue,join,delete,sort()////////////////////////
// //** it checks presence of variable ** return ans in true or false
// let friends : string[] = ["ayesha" , "alina" , "aliza"]
// // console.log(friends.includes("Hira"))              //false
// // console.log(friends.includes("ayesha"))            //true
// // //** 2 Array ko concreate karta hay
// console.log(friends.join())
// console.log(friends.join(""))
// console.log(friends.join("-"))
// let fruits = ["apple", "mango" , "banana"]
// delete fruits[2]           // index ki base pr
// console.log(fruits)
// let numbers = [1 ,9 ,8 ,7 ,5 ,9, 4]
// numbers.sort()
// console.log(numbers)
// let capitlwords = ["bubli" ,"daniyal" ,"guriya" ," hania" ,"ujala" , "dua","ali"]
// capitlwords.sort()
// console.log(capitlwords)
// /////////////////////concat(),delete(),reverse(),join(),tostring(),find()//////////////////
// let cl : string[] = ["I" , "LOVE" , "MY ", "MOM"]
// let cl2 : string[] = ["i", "love", "my", "brothers"]
// let cl3 : string[] = ["i", "love" ,"my", "sisters"]
// console.log(new_array) ///// 3eeno array ko apas my mila dya
// // delete cl2[2]         //// delete kardyga jo index dogy
// // cl.reverse()          // ultaa krdayga
// // .
// let arr=[10,20,30,40]; for (var val of arr) {console.log(val)}
// let myType = {name : "nida", id:1};
// let myType2 = {id : 2, name : "tom" , age : 22};
// type myType = myType2
// let c = ((a,b) => ++a)(1,2)
// console.log(c)
// var a : {too : number}
// var a1 = {too:1, baz :2}
// a = a1
// ///////////////////////////////////****practice****/////////////////////////////////////
// let partyMenu : string[] = ["Biryani" , "Tikka" , "pepsi"]
//       console.log(partyMenu.map(partyMenu2 =>{
//                 if(partyMenu2 == "pepsi"){
//                    partyMenu2  = "7_up"
//                   }
//                   return partyMenu2  //yahan pepsi kay bjayy 7_up ayega
// }))
// console.log(partyMenu)// yahan upar wala array print hog
////////////////////How we change it through second method///////////////////////
// let numbers1 = [ 1, 2 ,3 ,4 ,5]
// let squarenumbers = numbers1.map(num => num*2)
// console.log(numbers1)
// console.log(squarenumbers)
//                     //////////////slice , splice////////////////
// let user1 = ["ahmed", "bubli" , "ceema" , "dancer", "rubab" ,"rafy"]  
// // console.log(user1.length)
// console.log(user1.slice(4)) 
// console.log(user1.slice(5))
//////////////////practice from lexical scope website//////////////////
///////////////////why we use return function///////////////////////
let z = "hello";
function meet() {
    let y = "Hello";
    console.log("hi " + y); // ab ye variable bahar console hoskta hy
    return (y);
}
//let a = "HellO"
meet(); //string hata kr upar ka return a hata deny sy error ni hoga// laken undefined kardya compiler
// let response = meet()  // variable ko dynamic bnany ka tareeka 
// //return krwany ky lea basically ye importnt hota hy ky ap jo return kara gaya hy usko 1 variable ky = krdo
// console.log("Meet my beautiful friends")
// console.log(response +", Maha") // return (a) ni likhny say undefined krdayga
// console.log(response + ", Aiman")
// console.log(response + ", Dua")
// // //wide = noreturn
// ////// Examples
//     function sayHello() { 
//     let name = "John"; // Local variable
//     console.log("Hello " + name); 
//     return(name)
//     }  
// sayHello(); // Output: "Hello John" 
// //console.log(name);// name is not defined kyu ky name ky variable ki varaible ki block scope ky bahar phchan ni hay
/////////////////////////////////EX : 2///////////////////////////////////////
// function outer() { 
//     let name = "John"; // Outer function variable 
//     function inner() { 
//         console.log("Hello " + name); 
//     } 
//   inner(); // Output: "Hello John" 
// } 
// outer();//afunction my aik mzzed function banaya jayega tw function call krny pr result ayega
// // ///////////////////////Ex : 3///////////////////////////////
// function outer3() { 
//     let name = "John"; // Outer function variable 
//     function inner() { 
//         console.log("Hello " + name); 
//     } 
//     inner();//agar function ky andr function banaya jayega tw 1 bar under call kr ky function bahar call hoga
// }
// outer3();
// // // /////////////////////////////Error//////////////////////////////
// function say_Hello(){ 
//     let name = "John"; // Function variable
//     if(true){ 
//         let message = "Hello"; // Block variable 
//         console.log(message + " " + name);  
//         // Output: "Hello John" 
//     }{
//     console.log(message);//jb function ky undar 2 block scope banayengen tw dosra 
//     //B.scope phly block scope ky variable ko ni janyga
// }
// }
//say_Hello();  
// // //////////////practice function///////////////////
// // let name3 : string[] = ['ALI' , 'alina' , 'ali' , 'alina']
// // console.log(name3.indexOf("ali"))
// // console.log(name3.length)
// // console.log(name3.pop())
// // console.log(name3.shift())
// // console.log(name3.unshift("samar"))
// // console.log(name3.length)
// // console.log(name3.map(name3 => {
// //     if(name3 == "ali"){
// //        name3 = "Huziafa"
// //     }
// //     return name3
// //  }))
// // //////////////practice//////////////////////
// let names: string[] = ["Hunain" , "Hyder" , "Ali" ] 
// console.log(names.map(names => {
//            if(names == "Ali"){
//               names = "Abdullah"
//            }
//            return names
// }))
// console.log(names)
// let numbers : number[] = [2 , 5 , 7 , 8 , 9 , 10]
// console.log(numbers.map(numbers => {
//         if(numbers == 5) {
//         (numbers = 7)    
//         }
//         return numbers
// }))
//
//sort,join,include,delete,concat,reverse
// let array = ["alina", "wahab" , "shah", "bisma"]
// let array2 = ["bisma" , "hani" , "hadika" , "fariha"]
// let new_array = array.concat(array2)
// console.log(new_array)
// console.log(array.join(""))
// console.log(array.join("-"))
// console.log(array.join(","))
// console.log(array.includes("wahab"))
// delete array [3]
// console.log(array.reverse())
// /function, inner & outer function///////////
function fight() {
    let all = "get out";
    //console.log(all + " hiba")
    // return (all)
}
fight();
let conclusion = fight();
console.log("Hiba you should " + conclusion);
console.log("Samia you should " + conclusion);
console.log("seema you should " + conclusion);
export {};
///////////////////////////////////////when void return ni krta errorr ayega
// function _fight(): void{
//     let all = "get out"
//     //console.log(all + " hiba")
//     return (all)     // yahan error dyga
// }
// _fight()
// let _conclusion = _fight()
// console.log("Hiba you should " + _conclusion)
// console.log("Samia you should " + _conclusion)
// console.log("seema you should " + _conclusion)
// /////////////////inner & outer function///////////
// function outer1(){
//     let a = "shreen"
//     function inner2(){
//     console.log("Hello " + a) 
//     }
//      inner2()
// }
// outer1()
// function motivationalVideo(){
//     let a = "will see motivational video at 3 o'clock"
//     let b =  "will see motivational video at 4 o'clock"
//     function motivational_video(){
//         console.log("Alina " + a)
//         console.log("Aliza " + b)
//     }
//     motivational_video()
// }
// motivationalVideo()
// function say_HEllo(){ 
//     let name = "John"; // Function variable
//     if(true){ 
//         let message = "Hello"; // Block variable 
//         console.log(message + " " + name);  
//         // Output: "Hello John" 
//     }{
//     console.log(message);//jb function ky undar 2 block scope banayengen tw dosra 
//     //B.scope phly block scope ky variable ko ni janyga
// }
// }
// say_HEllo(); 
// function say_baye{
//     let msg = "baye"
//     if(true){
//         let name = "marukh"
//         console.log(name + "" + msg)
//     }
//     }
// say_baye()    
// let b : number[] = [1 ,2 , 3 , 4]
// let numbers = 19
// //numbers.sort()
// console.log(numbers.toString)
// console.log(numbers.toFixed())
