#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todosList = [];
let conditions = true;

console.log(chalk.bgYellow.bold("\n \t welcome to Code with Ayazkhan - Todo-List Application\n"));

while(conditions){
    let addtask = await inquirer.prompt([
        {
              name: "task",
              type: "input",
              message:chalk.red("Enter your New task:")
        }
    ]);
    todosList.push(addtask.task)
    console.log(`${addtask.task} task added in todo-list successfully`);

    let addmoretask = await inquirer.prompt([
        
        {
             name: "addmore",
             type: "confirm",
             message: "Do you want to add more task ?",
             default: "False"
        }
    ]);
    conditions = addmoretask.addmore
}
console.log(chalk.bind("Your updated todo-list:" ,todosList ));