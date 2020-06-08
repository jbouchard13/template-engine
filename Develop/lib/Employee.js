// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    // returns the employees name
    return this.name;
  }
  getId() {
    // returns the employee's id
    return this.id;
  }
  getEmail() {
    // returns the employee's email
    return this.email;
  }
  getRole() {
    // returns the employee's role as "Employee"
    return "Employee";
  }
}

module.exports = Employee;
