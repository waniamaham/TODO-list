#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.blue.bold("\n \t WELLCOME TO MY TODO LIST APPLICATION! \n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.yellowBright("What you want to add in your todos?")
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.yellowBright("Are you sure! Do you want to add more?"),
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    console.log(chalk.magenta.bold("Item is add Succesfully in your TO-DO List (^_^)"));
    condition = addTask.addMore;
    console.log(todos);
}
