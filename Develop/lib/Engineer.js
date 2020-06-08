// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    // returns the engineer's github account name
    return this.github;
  }
  getRole() {
    // returns the employee's role as "Engineer"
    return "Engineer";
  }
}

module.exports = Engineer;
