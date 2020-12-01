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
        default: "ID NUMBER",
        
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: "office",
        default: "Office number",
    },
  
]
module.exports = questions;