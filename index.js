#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const success = (...message) => { console.log(chalk.green(message)); }, info = (...message) => { console.log(chalk.green(message)); }, error = (...message) => { console.log(chalk.green(message)); };
function wordCounter() {
    inquirer.prompt({
        name: "text",
        type: "editor",
        message: "Enter text to count words and characters:"
    }).then(({ text }) => {
        const trimmedText = text.trim(), wordsCounter = text.split(' ').length, charactersCounter = text.replace(/\s+/g, '')
            .split('').length;
        success(`There are ${wordsCounter} words and ${charactersCounter} characters in the text`);
        inquirer.prompt({
            name: "isAgain",
            type: "confirm",
            message: "Want to try again?"
        }).then(({ isAgain }) => {
            if (isAgain) {
                wordCounter();
            }
            else {
                info("Thank you for using the app.");
            }
        });
    });
}
wordCounter();
