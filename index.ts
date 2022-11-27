#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let first: number;
let second: number;
let operator: string;

async function getFirstNumber() {
  const answers = await inquirer.prompt([{
      name: "first",
      type: "number",
      message: "Enter first number:"}
  ]);
  return answers.first
}
async function getSecondNumber() {
  const answers = await inquirer.prompt({
    name: 'second',
    type: 'number',
    message: 'Enter second number:',
  });
  return answers.second;
}

async function getOperator() {
  const selectOperator = await inquirer.prompt({
    name: 'operator',
    type: 'list',
    message: 'Select Operator for apply operation',
    choices: [
      '+',
      '-',
      '*',
      '/',
    ],
  });

  return selectOperator.operator;
}


getFirstNumber().then((res) => {  
  first = res;
  return getSecondNumber();
}).then((res) =>{
  second = res;
  return getOperator();
}).then((res) => {
  switch(res) {
    case '+':
      console.log(chalk.blue('After Addion of two numbers', first + second));
      break;
    case '-':
      console.log(chalk.blue('After subtracting of two numbers', first - second));
      break;
    case '*':
      console.log(chalk.blue('After muliplication of two numbers', first * second));
      break;
    case '/':
      console.log(chalk.blue('After devison of two numbers', first / second));
      break;
    default: 
      console.log(chalk.blue('Sorry! You select wrong operater'));
  }
}).catch((error) => {
  console.log(chalk.bgRed('Sorry You Enter wrong value', error));
});

