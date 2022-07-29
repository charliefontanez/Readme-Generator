// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project? (required)",
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(`./${fileName}`, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("Readme created!");
  });

}

// TODO: Create a function to initialize app
function init() {
  var promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
        validate: questionInput => {
          if (questionInput) {
            return true;
          }
          else {
            console.log("Please enter a title for your Readme!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your README',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          }
          else {
            console.log("Please enter a description for your README");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to include a table of Contents',
        default: true
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: true
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license would you like to use',
        choices: ['MIT License'],
        when: ({ confirmLicense }) => {
          if (confirmLicense) {
            return true;
          }
          else {
            return false;
          }
        }
      }
    ]);
  }

  promptUser()
    .then( data => writeToFile("README.md", data))
}

// Function call to initialize app
init();
