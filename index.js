// Constants
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const buildPage = require("./src/template.js");
let myTeam= [];
// set of prompts for each employee extension class
function getPrompts(role){
    let promptsArray=[
        {
          type: 'input',
          name: 'name',
          message: 'Enter '+ role + "'s name. (Required)",
          validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please enter '+ role + "'s name!"  );
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter '+ role + "'s id.",
          validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please enter '+ role + "'s id!"  );
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter '+ role + "'s email. (Required)",
          validate: email=>
        {
            // Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
              return true;
            } else{ console.log('Please enter ' + role + "'s email!");
            return false;    
          }
        }
        }];
        switch (role){
          case 'Manager':
            promptsArray.push({
              type: 'input',
              name: 'officeNumber',
              message: 'Enter '+ role + "'s office number. (Required)",
              validate: name => {
                if (name) {
                  return true;
                } else {
                  console.log('Please enter '+ role + "'s office number!"  );
                  return false;
                }
              }
            });
            break;
          case 'Engineer':
            promptsArray.push({
              type: 'input',
              name: 'github',
              message: 'Enter '+ role + "'s GitHub username. (Required)",
              validate: name => {
                if (name) {
                  return true;
                } else {
                  console.log('Please enter '+ role + "'s GitHub username!"  );
                  return false;
                }
              }
            });
            break;
            case 'Intern':
              promptsArray.push({
                type: 'input',
                name: 'school',
                message: 'Enter '+ role + "'s school. (Required)",
                validate: name => {
                  if (name) {
                    return true;
                  } else {
                    console.log('Please enter '+ role + "'s school!"  );
                    return false;
                  }
                }
              });
              break;
              
        }
        return promptsArray;
      }
      
// add Manager to myTeam array, callback new team member
function newManager(){
  let prompts= getPrompts('Manager');
  inquirer.prompt(prompts)
  .then( data => {
    let manager= new Manager(data.name, data.id,data.email, data.officeNumber);
    myTeam.push(manager);
    addTeamMember();
  })
}
// ask user to add new team member or build html
function addTeamMember(){
  inquirer.prompt([{
    type: "list",
    name: "addNewMember",
    message: "Would you like to add more team members?",
    choices: ["Add an Engineer", "Add an Intern", "No, finish building my team"],
}, ])
.then(data => {
    switch (data.addNewMember) {
        case "Add an Engineer":
            addEngineer();
            break;
        case "Add an Intern":
            addIntern();
            break;
        case "No, finish building my team":
       // build HTML page
          buildPage(myTeam);
            break;
    }
});  
}
// add new Engineer to myTeam array, callback - add new team member or build HTML
function addEngineer(){
  let prompts= getPrompts('Engineer');
  inquirer.prompt(prompts)
  .then( data => {
    let engineer= new Engineer(data.name, data.id,data.email, data.github);
    myTeam.push(engineer);
    addTeamMember();
  })
}
// add new Intern to myTeam array, callback - add new team member or build HTML
function addIntern(){
  let prompts= getPrompts('Intern');
  inquirer.prompt(prompts)
  .then( data => {
    let intern= new Intern(data.name, data.id,data.email, data.school);
    myTeam.push(intern);
    addTeamMember();
  })
}
// start building my team: input team name, then callback - add manager
const myApp = () => {
     inquirer.prompt([
      {
        type: 'input',
        name: 'teamName',
        message: 'What is your team name? (Required)',
        validate: teamTame => {
          if (teamTame) {
            return true;
          } else {
            console.log('Please enter your team name!');
            return false;
          }
        }
      },
    ])
    .then(data => {
      // add team name to team array
      myTeam.push(data.teamName);
      newManager();
  });
};
// Function call to initialize app
myApp();
