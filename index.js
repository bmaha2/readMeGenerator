const inquirer = require("inquirer");
const generateMarkDown = require("./util/generateMarkDown");
const fs = require("fs");



const quesions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project"

    },
    {
        type: "input",
        name: "description",
        message: "Enter the description for your project"

    },
    {
        type: "input",
        name: "installation",
        message: "Installation step"

    },
    {
        type: "input",
        name: "usage",
        message: "Usage"

    },
    {
        type: "input",
        name: "license",
        message: "License Type"

    },
    {
        type: "input",
        name: "contributing",
        message: "enter Contributor"

    },
    {
        type: "input",
        name: "tests",
        message: "test"

    },
    {
        type: "input",
        name: "email",
        message: "Enter emailaddress"

    },
    {
        type: "input",
        name: "profileURL",
        message: "Enter url image"

    },
    


]

function writeToFile(fileName, data) {
    console.log(`generating your readme`);
    fs.writeFileSync(`${fileName}.md`, data)
   console.log(`successfully written`);
}

function init() {
    getUserData()
    .then(data=> {
        console.log(data);
        const markDown = generateMarkDown(data)
        writeToFile("README", markDown)
    })

    
}




function getUserData() {
    return inquirer.prompt(quesions)
        .then(answers => {
            console.log(answers);
            return answers;
        })
        .catch(err => {
            console.error(err);

        })
}
init();