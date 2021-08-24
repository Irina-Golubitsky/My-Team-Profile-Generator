// Constants
const fs = require("fs");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/Intern");
// create html file, write it to dist folder
function buildPage(myTeam) {
    let teamPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>
        <div class="col-span-12 bg-red-600 m-4 p-4">
            <p class="text-white font-bold text-4xl flex flex-col items-center ">
            ${myTeam[0]} 
            </p>
        </div>
  
    <!-- team cards -->
    <div class="flex items-center justify-center p-5">
    <div i class="grid m-2 gap-4 mx-auto w-10/12  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">`;
    // card for each team member
    for (i = 1; i < myTeam.length; i++) {
        teamPage += `<div class="bg-gray-100 text-l shadow-lg"><div class="font-bold  bg-blue-600 p-4 pb-0 text-white">${myTeam[i].name}</div>`;
        if (myTeam[i].getRole() === 'Manager') {
            teamPage += `<div class="flex items-center font-bold  p-4 bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg> Manager</div>`;
        } else if (myTeam[i].getRole() === 'Engineer') {
            teamPage += `<div class="flex items-center font-bold p-4 bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg> Engineer</div>`;
        } else {
            teamPage += `<div class="flex items-center p-4 font-bold bg-blue-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg> Intern</div>`;
        }
        teamPage += `<div class=" p-4 pb-2 mb-2">ID: ${myTeam[i].id} </div>
                <div class="p-4 pt-1 ">Email: <a class="text-blue-600 hover:underline" href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></div>`;
        if (myTeam[i].getRole() === 'Manager') {
            teamPage += `<div class="p-4 pt-1 tmb-2">Office number: ${myTeam[i].officeNumber} </div></div>`;
        }
        else if (myTeam[i].getRole() === 'Engineer') { teamPage += `<div class=" p-4 pt-1 mb-2">GitHub: <a class="text-blue-600 hover:underline" href="https://github.com/${myTeam[i].github}" target="_blank">${myTeam[i].github}</a></div></div>`; }
        else { teamPage += `<div class="p-4 pt-1 mb-2">School: ${myTeam[i].school} </div></div>`; }
    }
    teamPage += `</div></div>
    
     <!-- scripts -->
    <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</body>

</html>`;
    // write html file to dist folder
    fs.writeFile(`./dist/${myTeam[0]}.html`, teamPage, function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`File ${myTeam[0]}.html created in dist folder!`);
        }
    }
    );
}
module.exports = buildPage;