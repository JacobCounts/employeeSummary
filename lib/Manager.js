
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Employee = require("./Employee");
class Manager  extends Employee {
    constructor(name, position, id, email, phone) {
        super(name, position, id, email)
        this.phone = phone;
    }

    getRole() {
        return "Manager";
    }

    getPhone() {
        return this.phone;
    }
}
        
const manager = new Manager

module.exports = Manager;
    

    
    




// if (!Employee) {
//     throw new error ("You are not an employee")
// }