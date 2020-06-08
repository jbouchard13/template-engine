const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// array of objects containing employee info
const teamMembers = [];

// create arrays of questions for each role
// array of starter questions to prompt basic employee info
const starterQuestion = {
  type: "list",
  name: "add",
  message: "What is the team member's role?",
  choices: ["Manager", "Engineer", "Intern"],
};
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
  {
    type: "list",
    name: "add",
    message: "What role do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add another"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
  {
    type: "list",
    name: "add",
    message: "What role do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add another"],
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
  {
    type: "list",
    name: "add",
    message: "What role do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add another"],
  },
];

// call inquirer to start the app
// take the input from the first question
// to determine which ones to prompt next
inquirer.prompt(starterQuestion).then((answers) => {
  addCheck(answers);
});

// create a function to check when the user wants to add a new person
const addCheck = (answers) => {
  if (answers.add === "Manager") {
    getManagerInfo();
  } else if (answers.add === "Engineer") {
    getEngineerInfo();
  } else if (answers.add === "Intern") {
    getInternInfo();
  }
};
// create an ending function that adds all info to html and tells the user it is added
const endProgram = (teamMembers) => {
  // pass info from teamMembers array to the render function
  const newHtml = render(teamMembers);
  // pass rendered data into writeFileSync
  fs.writeFileSync(outputPath, newHtml, "utf-8");
  // console log to let the user know it has been saved
  console.log("New html file saved!");
};

// create functions to get info for each employee type
// function that will get manager info with inquirer
const getManagerInfo = () => {
  // run inquirer to prompt info for a new manager
  inquirer.prompt(managerQuestions).then((answers) => {
    // create a new manager with the answered name, id, email, and office number
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    // push the new team member to the teamMembers array
    teamMembers.push(manager);

    if (answers.add === "I do not want to add another") {
      // save and end the program
      endProgram(teamMembers);
    } else {
      // check the selected answers to determine what to add next
      addCheck(answers);
    }
  });
};
// function that will get engineer info with inquirer
const getEngineerInfo = () => {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    // push the new team member to the teamMembers array
    teamMembers.push(engineer);

    if (answers.add === "I do not want to add another") {
      // save and end the program
      endProgram(teamMembers);
    } else {
      // check the selected answers to determine what to add next
      addCheck(answers);
    }
  });
};
// function that will get intern info with inquirer
const getInternInfo = () => {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    // push the new team member to the teamMembers array
    teamMembers.push(intern);

    if (answers.add === "I do not want to add another") {
      // save and end the program
      endProgram(teamMembers);
    } else {
      // check the selected answers to determine what to add next
      addCheck(answers);
    }
  });
};

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
