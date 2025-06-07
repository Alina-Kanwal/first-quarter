//import {log} from "console";
import inquirer from "inquirer";
import chalk from "chalk"
// let answers = await inquirer.prompt(
//     [
//         {
//          type : "list",
//          name: "age",
//          message : "Enter your age",
//          choices : [22, 23 , 24 ,25 , 26]
//         }
//     ]
// )
// console.log(chalk.blueBright.bold.italic.bgGray("your current age is:", answers.age))

//////////////////practice///////////////////
let conclusion = await inquirer.prompt(
    [
        {
            type : "list",
            name : "favouritecolor",
            message: "What is your favourite color?",
            choices : ["Blue", "Green", "red", "Grey"]
        }
    ]
)
console.log(chalk.grey.bold.italic.bgGray("Your favourite color is :" + conclusion.favouritecolor))


