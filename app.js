const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const questions = require("./questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const person = [];

// console.log(render([new Manager("jake", 1, "@this.com", 1234)]));

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// inquirer.prompt(questions).then((response) => {
//     console.log(response);

// });
//  function promptUser() {
//      inquirer.prompt(questions).then(function(response) {
//          let name = response.name;
//          let id = response.id;
//          let email = response.email;
// });
function startPrompt() {
    newEmployee()
}
startPrompt(); 


function newEmployee () {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select type of team member',
            name: "addEmployee",
            choices: ["Manager", "Intern", "Engineer", "I dont want to add anymore"]
        },
    ])
    .then(response => {
        if (response.addEmployee === "Manager") {
            newManager();
        }
        else if (response.addEmployee === "Intern") {
            newIntern();
        }
        else if (response.addEmployee === "Engineer") {
            newEngineer();
        }
        else if (response.addEmployee === "I dont want to add anymore") {
            writeToFile(render(person));
           
        }
    })
}

function newManager () {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter name",
            name: "name",
        },
        {
            type: 'input',
            message: "Please enter your ID number",
            name: "id",
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: "email",
        },{
            type: 'input',
            message: "Please enter office phone number",
            name: "officeNumber",
        },
    ])
    .then(response => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let officeNumber = response.officeNumber;

        const managerInfo = new Manager(name, id, email, officeNumber)
        person.push(managerInfo)
        newEmployee();
    })
}

function newEngineer () {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter name",
            name: "name",
        },
        {
            type: 'input',
            message: "Please enter your ID number",
            name: "id",
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: "email",
        },{
            type: 'input',
            message: "Please enter your Github username",
            name: "github",
        },
    ])
    .then(response => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let github = response.github;

        const engineerInfo = new Engineer(name, id, email, github)
        person.push(engineerInfo)
        newEmployee();
    })
}

function newIntern () {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter name",
            name: "name",
        },
        {
            type: 'input',
            message: "Please enter your ID number",
            name: "id",
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: "email",
        },{
            type: 'input',
            message: "Please enter your school",
            name: "school",
        },
    ])
    .then(response => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let school = response.school;

        const internInfo = new Intern(name, id, email, school)
        person.push(internInfo)
        newEmployee();
    })
}

function writeToFile (response) {
    return fs.writeFile(outputPath, response, function(error) {
        if (error) {
            console.log("Sorry there was a problem")
        }else{
            console.log("Complete")
        }
    })
}



        
        
       
            




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// const inquirer = require("inquirer");

