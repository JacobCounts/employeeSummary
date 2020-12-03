// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.



class Intern extends Employee {
    constructor(name, position, id, email, school) {
        super(name, position, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

}



// const intern = new Intern

module.exports = Intern;
