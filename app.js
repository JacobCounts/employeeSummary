const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const person = [];
const idarr = [];

function startPrompt() {
  newEmployee();
}
startPrompt();

//Prompts user to select which employee to add
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select type of team member",
        name: "addEmployee",
        choices: [
          "Manager",
          "Intern",
          "Engineer",
          "I dont want to add anymore",
        ],
      },
    ])
    .then((response) => {
      if (response.addEmployee === "Manager") {
        newManager();
      } else if (response.addEmployee === "Intern") {
        newIntern();
      } else if (response.addEmployee === "Engineer") {
        newEngineer();
      } else if (response.addEmployee === "I dont want to add anymore") {
        writeToFile(render(person));
      }
    });
}
// creates a new manager 
const newManager = function() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter name",
        name: "name",
        validate: function (name) {
            if (name === "") {
              return "Please add at least one character";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter your ID number",
        name: "id",
        validate: function (id) {
            console.log(id);
            var id2 = parseInt(id);
  
            if (isNaN(id2)) {
              return "Please enter a number";
            } else if (idarr.includes(id2)) {
              return "Id already used";
            } else if (id2 <= 0) {
              return "Please include a positive number";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email",
        validate: function (email) {
            if (email === "") {
              return "Please add a valid name";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter office phone number",
        name: "officeNumber",
        validate: function (officeNumber) {
            if (officeNumber === "") {
              return "Please enter a valid number";
            } else {
              return true;
            }
          },
      },
    ])
    .then((response) => {
      let name = response.name;
      let id = response.id;
      let email = response.email;
      let officeNumber = response.officeNumber;

      const managerInfo = new Manager(name, id, email, officeNumber);
      person.push(managerInfo);
      newEmployee();
     
    });
}

// creates a new engineer
const newEngineer = function() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter name",
        name: "name",
        validate: function (name) {
            if (name === "") {
              return "Please add at least one character";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter your ID number",
        name: "id",
        validate: function (id) {
            console.log(id);
            var id2 = parseInt(id);
  
            if (isNaN(id2)) {
              return "Please enter a number";
            } else if (idarr.includes(id2)) {
              return "Id already used";
            } else if (id2 <= 0) {
              return "Please include a positive number";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email",
        validate: function (email) {
            if (email === "") {
              return "Please add a valid name";
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        message: "Please enter your Github username",
        name: "github",
        validate: function (github) {
            if (github === "") {
              return "Please add a valid github";
            } else {
              return true;
            }
          },
      },
    ])
      
    
    .then((response) => {
      let name = response.name;
      let id = response.id;
      let email = response.email;
      let github = response.github;

      const engineerInfo = new Engineer(name, id, email, github);
      person.push(engineerInfo);
      newEmployee();
    });
}

// creates a new intern 
const newIntern = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter name",
        name: "name",
        validate: function (name) {
          if (name === "") {
            return "Please add at least one character";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter your ID number",
        name: "id",
        validate: function (id) {
          console.log(id);
          var id2 = parseInt(id);

          if (isNaN(id2)) {
            return "Please enter a number";
          } else if (idarr.includes(id2)) {
            return "Id already used";
          } else if (id2 <= 0) {
            return "Please include a positive number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email",
        validate: function (email) {
          if (email === "") {
            return "Please add a valid name";
          } else {
            return true;
          }
        },
      },

      {
        type: "input",
        message: "Please enter your school",
        name: "school",
        validate: function (school) {
            if (school === "") {
              return "Please add a valid school";
            } else {
              return true;
            }
          },
      },
    ])
    .then((response) => {
      let name = response.name;
      let id = response.id;
      let email = response.email;
      let school = response.school;

      const internInfo = new Intern(name, id, email, school);
      person.push(internInfo);
      newEmployee();
    });
};

// populates user input onto html document
function writeToFile(data) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  return fs.writeFile(outputPath, data, function (error) {
    if (error) {
      console.log("Sorry there was a problem");
    } else {
      console.log("Complete");
    }
  });
}


