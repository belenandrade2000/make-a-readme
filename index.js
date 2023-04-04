// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
//const questions = 

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What would you like your project title to be?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Write a description of your project:',
        name: 'description',
    },
    {
      type: 'checkbox',
      message: 'Select the headers needed in your table of contents ',
      name: 'contents',
      choices: ['Installation', 'Usage', 'License', 'How to Contribute', 'Tests', 'Questions'],
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the devlopment environment running.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   
            { value: 'GNU' }, 
            { value: 'MIT' }, 
            { value: 'BSD2' }, 
            { value: 'BSD3' },  
            { value: 'Boost Software License' }, 
            { value: 'Creative Commons Zero' }, 
            { value: 'Eclipse Public'},
            { value: 'GNU v3.0'},
            { value: 'GNU v2.0'},
            { value: 'GNU v2.1'},     
            { value: 'MPL' }, 
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Include guidelines on how other developers can contribute',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Provide testing instructions',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Provide testing instructions',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },

  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();