const inquirer = require("inquirer");
const generateMarkDown = require("./util/generateMarkDown");
const fs = require("fs");
const axios = require("axios");

const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project repo: "

    },
    {
        type: "input",
        name: "description",
        message: "Enter the description for your project: "

    },
    {
        type: "input",
        name: "installation",
        message: "Installation steps: ",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage of the application: "
    },
    {
        type: "checkbox",
        name: "license",
        message: "License Type: ",
        choices: [
            "MIT",
            "Apache",
            "GPL"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "How to contribute to the project: "
    },
    {
        type: "input",
        name: "tests",
        message: "How to run the test",
        default: "run test"
    },

]

function writeToFile(fileName, data) {
    console.log(`generating your readme`);
    fs.writeFileSync(`${fileName}.md`, data)
    console.log(`successfully written`);
}

function init() {
    getUserData()
        .then(data => {
            console.log(data);
            const markDown = generateMarkDown(data)
            writeToFile("README", markDown)
        })
}

function getUserData() {
    return inquirer.prompt(questions)
        .then(answers => {
            axios.get(`https://api.github.com/users/${answers.username}`).then(res=> {
                image = res.data.avatar_url;
                console.log(image)
                return image;
            })
            console.log(answers);
            return answers;
        })

        .catch(err => {
            console.error(err);
        })
}
init();