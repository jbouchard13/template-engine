// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    // returns the manager's office number
    return this.officeNumber;
  }
  getRole() {
    // returns the manager's role as "Manager"
    return "Manager";
  }
}

module.exports = Manager;
