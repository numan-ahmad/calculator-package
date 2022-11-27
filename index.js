#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import chalk from "chalk";
let first;
let second;
let operator;
function getFirstNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([{
                name: "first",
                type: "number",
                message: "Enter first number:"
            }
        ]);
        return answers.first;
    });
}
function getSecondNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt({
            name: 'second',
            type: 'number',
            message: 'Enter second number:',
        });
        return answers.second;
    });
}
function getOperator() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectOperator = yield inquirer.prompt({
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
    });
}
getFirstNumber().then((res) => {
    first = res;
    return getSecondNumber();
}).then((res) => {
    second = res;
    return getOperator();
}).then((res) => {
    switch (res) {
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
