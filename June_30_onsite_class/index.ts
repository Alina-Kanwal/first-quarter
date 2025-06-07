// import { resolve } from "path/win32"

import { rejects } from "assert";
import { resolve } from "path";

// function _userinfo(name  : string, timing : string , email : string){
//     console.log(name,timing, email)
// }
// _userinfo("ali","2_5","alinakanwal" )

// // import { rejects } from "assert"
// // import { resolve } from "path/posix"

// function userinfo(name  : string, timing : string , email : string = "Giaic"){ //= Giaic default parameter hy
//     console.log(name,timing, email)
// }
// userinfo("ali","2_5" )  // email ni dali par error ni aya // console my email Giaic ayega
// userinfo("ali" , "3_5" , "email")  // email dalnay pr bh ni aya 

// //Rest parameter
// // // jb ye pta ni hooo kay kitny arguement hongay//
// // // rest parameter ka name dea 
// const wallets = (color: string, ...rest : string[]) => 
// {
// console.log(color, rest)
// };
// wallets("black", "cash", "nic" ," license"  ) //jitny chahhee arguement daloo kyu ky upar ...rest krdea hy
// wallets("red"  , "pin" , "coin", "atm_card")


// // let food = (name : string | undefined , age : number , is_student : boolean) => {
// //     console.log (name , age , is_student)
// // }
// // food("hunain" , 21, true ) // ya to string krdo yaa phrr undefined
// // food(undefined , 34 , true )

// const add =(num1 : number , num2 : number ) => {

//     console.log(num1 + num2);

// return num1 + num2
// }
// add(4 ,7) 
// const res = add (10 ,10)  // java script say value chahye tw return use krty hain
// console.log(res)         // java script say value lany k lea hota hy 
// // function calll krty hain tw javascript say value mang rahy hoty hain

// //***************************CALLBACK FUNCTION */
// //*********************************************************Example 1 */
// function _one(name : any) {
//     console.log("Alina")
                    
// name()    
// }

// const _student = () => {                          //higher order
//     console.log("Student of GENAIC")
      
// }
// _one(_student)
           

// //*************************************************************Example 2 */

// function one(cb : () => void){
//     console.log("one")
//     cb()
// }
//  //callback function
//  const two = () => {
//     console.log("data base ")
//  }
// one(two)

// //***************************************************************PROMISE */
// //when we avoid callback we use promise

// //promise  - resolve _> .then .finally
// //promise _ resolve -> .catch  .finally
// let Makepromise = () => {
//     return new Promise((resolve , reject) => {
//         resolve(10 + 6)
//     })
// }
// Makepromise().then((res) => {                //higher order
//     console.log(res)
// })

// let _Makepromise = () => {
//     return new Promise((resolve , reject) => {
//         reject("you are rejected")
//     })
// }
// // _Makepromise().then((res) => {   //.catch ky 7 reject chllyga
// //     console.log(res)
// // })
// _Makepromise().catch((err) => {   //.catch ky 7 reject chllyga
//     console.log(err)
// })

//********************************************PROMISE WITH IF ELSE */
// let isvictory = true
// let cricket = () => {
//     return new Promise ((resolve , reject) => {
//         console.log("Match in progress")
//         if(isvictory){
//             setTimeout(() =>{
//                 resolve("we won")
//         },1000)
//     }
// })
// }
// cricket()
// .then((response) => {
//     console.log(response);   // => response say resolve chalta hay
// })
// .catch((err) => {
//     console.log(err);        // => err say reject chalta hay
// })


//*********************************************************PRACTISE */

// function info(name : string, edu : string){
//   console.log(name , edu)
// }
// info("alina" , "b.com")  // jitny argument utni detail

// function _info(name : string, edu : string , college : string = "abdullah college"){
//     console.log(name , edu , college)
// }
// _info("alina " , "b.com" )     //*abdullah college by default ayega

// let $info = (name : string , ...rest : string[]) => 
// {
//     console.log(name , ...rest)      //ye let orr const ky 7 use hoga
// };
// $info("alina" , "brave" , "dynamic" , "week " , "kind hearted" , "cruel")

// function userInfo(name : any){
//     console.log("alina")
// name()
// }
// const Userinfo = () => {
//     console.log(22)
//   }
// userInfo(Userinfo)

// //*****************************************************Promise */

// let $promise = () => {
//     return new Promise((resolve , reject) => {            //1
//          resolve("Today i m going for taking AI class")   
//     })
// }
// $promise().then((res) => {                                   
//     console.log(res)
// })

// let _confirm = () => {                                       //2
//      return new Promise((resolve , reject) => {
//        resolve("I need to work hard")    
//      })
// }
// _confirm().then((res) => {
//      console.log(res)
// })

// let wedding = () => {                                       //3
//     return new Promise((resolve , rejects) =>{
//         rejects("What we are going to do today?")
//     })
// }

// wedding().catch((err) => {
//     console.log(err)
// })
 
// let _wedding = () => {                                          //4
//     return new Promise((resolve, reject) => {
//         reject("What is happening?")
//     })
// }

// _wedding().catch((err) => {
//     console.log(err)
// })

// let $wedding = ()  => {
//     return new Promise((resolve , rejects) => {
//      rejects("how are you")
//     })
// };
// $wedding().catch((err) => {
//  console.log(err)
// })

//****************************************Again practie */
// function birthday(name : string){
//     console.log(name)
// }
// birthday("Alina")

// function _birthday(name : string, banquet : string = "Almass banqueet"){
//     console.log(name)
// }
// _birthday("Alina")

// let $birthday = (name :string , ...rest : string[]) => {
//     console.log(name , rest)
// }
// $birthday("alina", "ballons" , "cake " , "biryani" , "haleem")

// function Birthday(name : any){
//     console.log("Alina")
// name()
// }

// let _Birthday = () => {
//     console.log(4)
// }
// Birthday(_Birthday)

// let birthDay = () => {
//    return new Promise ((resolve, rejects) => {
//    resolve("what are u wearing today?")
//    })
// };

// birthDay().then((res) => {
//     console.log(res)
// })


// let name = "alina"
// console.log(name)


// let cooking = () =>  {
//     return new Promise((resolve, reject) => {
//     resolve("Alina will make pulaoo")  
 
//     })
// };
//    cooking().then((res) => {
//    console.log(res)
// })

let currentUsers :string[] = ["BiLal", "HaMza", "Rafy", "JunNid", "TaHa"];
let new_users : string[] = ["Alina", "Tyyaba", "BiLal", "Ayesha", "TaHa"];
new_users.forEach(newusersname =>{
    let lowercase: string = newusersname.toLowerCase() //Array ki value ko exist karny kay lya for each ka tareeka

    if(currentUsers.map(c_users => c_users.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newusersname} is not available. Please write a different username.`)
    }else{
        console.log(`The username ${currentUsers} is available.`)
    }
})
   












































































































































































