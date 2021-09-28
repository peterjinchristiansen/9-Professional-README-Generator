const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will the user install the dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can the user contribute to the repo?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command does the user need to use to run tests?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is supporting your application?',
        choices: [
            'Apache',
            'Boost',
            'Eclipse',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'SIL',
            'Unlicense',
            'WTFPL',
            'Zlib',
            'None',
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    }
]).then(data => {
    fs.writeFile('README.md', generate(data), function() {
        console.log('README is being generated');
    })
})