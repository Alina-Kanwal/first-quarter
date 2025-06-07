//*Annonymous type  
//*Type alias
//*Nested objects
//*Interface
//type declaration // isko m ny khud theak kea hay is lea confused hon

type teacher = {           // ye type "Alias" method hay
    fname : string         // data type dubara agy use krskty hain
    age : number
}
let person : teacher = {
    fname : "hina",
    age : 8,
   }
let personName : teacher = {
    fname : "hani",
    age : 9
}   
// console.log(person.age , person.fname)// is may is tarahn console hota hy
// console.log(person)
// console.log(person.age)


// // //Anonymous type           //data type define kar ky dubara use ni krskty
// let car : {color : string, model :number} = {
//         color : "white",
//         model : 2024
// }


// console.log(car.color)
// console.log(car["model"])

// // //type alias // usko bar bar use krskty kyu ky aik bar type ko declare krdesa
// type student = {
//     rollnumber : number,
//     class : string
// }
//   let student1 : student = {
//     rollnumber : 20,
//     class : "one"
// }
// console.log(student1.rollnumber , student1.class)


// ///********************** Nested objects
// type author = {
//     fname : string
//     lname : string

// }
// type Book1 = {
//     author : {
//     fname : string,
//     lname : string
// };
//     name : string;
// };    
// let myBook : Book1 = {
//     author :{
//         fname : " imran",
//         lname : "ali"
//     },
//     name: "my best book"
// }
// console.log(myBook)

// //Anonymous type 
// let car1 : {color : string, model :number} = {
//     color : "Black",
//     model : 2024
// }


// console.log(car.color)
// console.log(car["model"])
// //*****************************************nested //
// type persontype ={
//     name : {
//         fname : string
//         middlename? : string
//         lname : string
//         isprogrammer? : boolean
      
//     };
//     age : number
// }

let Person : persontype = {
    name : {
         fname : "ali",
         lname : " alii"
        },  
     age : 22,    
}
console.log(Person.name.fname, Person.age)
console.log(Person.name.lname, Person.age)

let person2 : persontype = {
       
    name : {
    fname : "ali",
    middlename : "ahsan",
    lname : " alii",
    isprogrammer : true
   },  
age : 22,    
}
console.log(person2)


////////////////////////////////////////interface////////////////////////////////////////

interface student1 {
    studentid : number;
    studentname : string;

}
interface teacher1 {
     teacherid : number;
     teachername : string ;
}

//dg = student1 & teacher ;

let intersected  : asdg = {
    studentid : 123,
    studentname : " hina",
    teacherid : 234,
    teachername : "akli"
}
console.log(intersected)


let parts = {"name" : "pipe" }
console.log(parts.name)
// /////////////////////////////practise of nested/////////////////////////////////////////
// type event = {                      
//     barat : number
//     valima: number

// }
// type reachtime = {
//     event : {
//     barat : number
//     valima : number 
//     };
//     detail : string
// };
// let reachTime : reachtime = {
//     event : {
//     barat : 10,
//     valima : 10    
//     },
//     detail : "All members are invited in the given time above below."
// }
// console.log(reachTime)
// /////////////////////////////////////party invite/////////////////////////
// type party = {
//     startingTime : number,
//     endingTime : number
// }
// type Party = {
//      party : {
//      startingTime : number,
//      endingTime : number
//      };
//      Detail : string
//     }
// let PartyOn : Party = {
//     party : {
//     startingTime : 11,
//     endingTime : 10
// },  
//     Detail : "All friends are invited in the party at the above time given below"
// }
// console.log(PartyOn)

// type Book = {
//      fname : string,
//      lname : string  
// }
// type book = {
//      Book : {
//       fname : string,
//       lname : string  
//      }
//      detail : string
// }
// let Bookauthor : book = {
//     Book : {
//     fname: "julia",
//     lname : "but"
//     },
//     detail : "This book is written by the name given above"
// }
// console.log(Bookauthor)

// ////////////////////////////////////Dinner invite//////////////////////////////////////////////

// type food = {
//     Dinner : string,
//     afterDinner : string
// }
// type Food = {
//     food : {
//         Dinner : string,
//         afterDinner : string
//     };
//     inSweet : string
// }
// let inParty : Food = {
//     food :{
//        Dinner : "Nalii nehari" ,
//        afterDinner : "Tikka"
//     },
//     inSweet : "Rabrii after one hour of taking dinner "
// }
// console.log(inParty)

//////////////////////////////////////////////////practice 
// type favouriteBook = {
//     bookName : string,
//     bookPublished :number
// }
// let bookDescription : favouriteBook = {
//     bookName : 'The power of thinking big',
//     bookPublished : 2017
// }
// let noveldescription : favouriteBook = {
//     bookName : "Jannat kay phool",
//     bookPublished : 2016
// }
// let bookName : favouriteBook = {
//     bookName : "Zindagi hassen hay",
//     bookPublished : 2025
// }
// console.log(bookName , bookDescription , noveldescription)

// //////////////////////////////anonymous type

// let summerVacations : {picnic : string , days : number}={
//     picnic :"Hong Kong",
//     days  : 24
// }

// let foods : {breakFast : string, lunch : string , dinner} = { // is may agar array dalna ho tw??
//     breakFast :"halwapori",
//     lunch : "biryani",
//     dinner : "chickentikka"
// }
// console.log(summerVacations)
// console.log(foods)

// ////////////////////////////////////nested objects
// type onlinecourse = {
//     gbob : string,
//     amazon : string,
// }
// type onlineCourse = {
//     onlinecourse : {
//         gbob : string,
//         amazon : string
//     },
//         fbAdds : string
// }
// let _onlinecourse : onlineCourse = {
//     onlinecourse :{
//         gbob : "Guest blogging business",
//         amazon : "virtual assistant"
//     },
//     fbAdds : "Facebookadds"
// }
// console.log(_onlinecourse)
// console.log(_onlinecourse.fbAdds)
// console.log(_onlinecourse.onlinecourse)



//////////////////////////////practice //////////////////////////////////////

type Yourdetail = {           //type Alias
   name : "string",
   mname? : "string",
   bestfrnd : "string",
}
let detail = {
    name : "Alina",
    mname : "Farzana"
}
let detail2 = {
    name : "muqadas",
    bestfrnd : "Alina",
}
console.log(detail)
console.log(detail.name)

let yourDetail : {name : string ; mname : string} = {   // anonymous type
    name : "Aliza",
    mname : "farzana"
}
console.log(yourDetail)

type articles = {
    firstArticle : string,
    secondArticle : string
}

type _articles = {
    articles : {
    firstArticle : string,
    secondArticle : string
    },
    thirdarticle : string,
    fourtharticle : string    
}
let _articles = {
    articles : {
    firstArticle : "English",
    secondArticle : "urdu"
    },
    thirdarticle : "Chines",
    fourtharticle : "turkish"
}
console.log(_articles)

























