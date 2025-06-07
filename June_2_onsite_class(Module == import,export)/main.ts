// import mymodule from  "./my_module.js"
// // varaible may save kr ky result dea 
// let result = mymodule.add(5,1)
// let result2= mymodule.subtract(10 , result)
// console.log("addition:", result)
// console.log("subtraction:" ,result2)
// //console.log(add(4,2))     //can't find name a
// //upar mymodule file ko import kea is lea mymodule.add likh kr function ko call kara hy
// //or ussay 1 variable ka name day dea

// import{divide , multiply} from "./my_module.js"

// let _result = divide(20 , 5)//
// let _result2 = multiply(10,_result)
// console.log("multiply:", _result)
// console.log("division:" , _result2)
//upar divde,multiply ko import kea is lea mymodule.add likh kr function ko call kara hy
//or aik variable _result ky barabr kr ky print krwadea

///////////////////practice////////////////////
import mymodule from "./my_module.js"
let conclusion = mymodule.add(10 ,3)
let _conclusion = mymodule.subtraction (10 , conclusion)
let result = mymodule.multiply(10 ,30)
let _result = mymodule.divde(50 , result)
console.log("addition :" , conclusion)
console.log("subtraction :" , _conclusion)
console.log("multiply: ", result)
console.log("divide:" , _result)
