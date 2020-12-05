const questions = [
    {
        type: 'list',
        message: "What is your position with this company?",
        name: "position", 
        choices: 
            [{name:'Manager', value: 'Manager'},
            {name:'Engineer', value: 'Engineer'},
            {name:'Intern', value: 'Intern'}],
    },
    {
        type: 'input',
        message: "What is your employee ID number?",
        name: "id", 
        default: "ID Number",
        
    },
    {
        type: 'input',
        message: "What is your email?",
        name: "email", 
        default: "johndoe@mail.com",
        
    },
    {
        type: 'input',
        message: 'What is your office phone number?',
        name: "office",
        default: "Office Number",
    },
    {
        type: 'input',
        message: "What is your Github user name?",
        name: "github", 
        default: "Github user name",
        
    },
    {
        type: 'input',
        message: "What school do you attend?",
        name: "school", 
        default: "",
        
    },
  
]
module.exports = questions;