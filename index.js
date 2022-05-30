const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./readme')

// questions
inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the installation process if applicable:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Name contributors for this project if any:'
    }, 
    {
        type: 'input',
        name: 'usage',
    
        message: 'What is this project used for?'
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Is there a test?'
    }, 
    {
        type: 'input',
        name: 'questions',
        message: 'What if there is an issue?'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for this project',
        choices: 
        [
            "Apache",
            "Academic",
            "GNU",
            "MIT",
            "Mozilla Public License",
        ]
    }, 
    {
        type: 'input',
        name: 'userName',
        message: 'Please provide your GitHub username:'
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }

]).then(response => {
    console.log(response)
 
fs.writeFileSync('dist/README.md', readme(response), 'utf8')
})