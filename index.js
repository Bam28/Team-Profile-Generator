const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const fs = require('fs')

const listOfEmployee = []

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name?',
            name: 'managerName',
            validate: (name) => {
                if(!name){
                    return 'Name cannot be empty'
                } else {
                    return true;
                }
            }
       },
       {
            type: 'input',
            message: 'What is the team manager\'s ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s email?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s office number?',
            name: 'managerOffice',
       },
       {
            type: 'list',
            message: 'Which type of member would you like to add?',
            name: 'list',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        },
    ])
    .then(function(answers){
        ///Create Manager
        const managerCreated = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        listOfEmployee.push(managerCreated)
        if(answers.list === 'Engineer'){
            createEngineer()
        } else if(answers.list === 'Intern'){
            createIntern()
        } else {
            fs.writeFile('./dist/index.html', content, function(err) {
                if(err) {
                    console.log('Couldnt save the file')
                } else {
                    console.log('Success new file generator inside the current file')
                }
            }) 
        }
        finallyDone()
    })



function createEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the team engineer\'s name?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is the team engineer\'s ID?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is the team engineer\'s email?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is the team engineer\'s github?',
                name: 'engineerGithub',
            },
            {
                type: 'list',
                message: 'Which type of member would you like to add?',
                name: 'list',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
            },
        ])
        .then(function(answers){
            const engineerCreated = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            listOfEmployee.push(engineerCreated)
            if(answers.list === 'Engineer'){
                createEngineer()
            } else if(answers.list === 'Intern'){
                createIntern()
            } else {
                fs.writeFile('./dist/index2.html', content, function(err) {
                    if(err) {
                      console.log('Couldnt save the file')
                    } else {
                      console.log('Success new file generator inside the current file')
                    }
                  })
                console.log('this is the list', listOfEmployee)
                for(let i = 0; i < listOfEmployee.length; i++){
                    console.log(listOfEmployee[i].name)
                }
        }
        })
}

function createIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the team intern\'s name?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is the team intern\'s ID?',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'What is the team intern\'s email?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What is the team intern\'s school?',
            name: 'internSchool',
        },
        {
            type: 'list',
            message: 'Which type of member would you like to add?',
            name: 'list',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        },
    ])
    .then(function(answers){
        const internCreated = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
        listOfEmployee.push(internCreated)
        if(answers.list === 'Engineer'){
            createEngineer()
        } else if(answers.list === 'Intern'){
            createIntern()
        } else {
            fs.writeFile('./dist/index2.html', content, function(err) {
              if(err) {
                console.log('Couldnt save the file')
              } else {
                console.log('Success new file generator inside the current file')
              }
            })
            console.log('this is the list', listOfEmployee)
            for(let i = 0; i < listOfEmployee.length; i++){
                console.log(listOfEmployee[i].name)
            }
        }
    })
}

function finallyDone() {
    const allMembers = document.querySelector('#all-members')
    for(let i = 0; i < listOfEmployee.length; i++){
        console.log('loop funciona')
        const memberSection = document.createElement('section');
        const nameAndPostion = document.createElement('div');
        const nameOfMember = document.createElement('h2');
        const postionOfMember = document.createElement('h3');
        const listInfoMemeber = document.createElement('ul');
        const idOfMember = document.createElement('li');
        const emailOfMember = document.createElement('li');

        memberSection.classList.add('member');
        nameAndPostion.classList.add('name-position');
        nameOfMember.classList.add('name');
        postionOfMember.classList.add('position');
        listInfoMemeber.classList.add('member-info');

        nameOfMember.innerHTML = listOfEmployee.name
    
        allMembers.appendChild(memberSection)
        memberSection.appendChild(nameAndPostion);
        memberSection.appendChild(listInfoMemeber);
        nameAndPostion.appendChild(nameOfMember);
        nameAndPostion.appendChild(postionOfMember);
        listInfoMemeber.appendChild(idOfMember);
        listInfoMemeber.appendChild(emailOfMember);
        
   
      }
  }

const content = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main id='all-members'>
    </main>
</body>
</html>`

// function createMembers() {
//     const allMembers = document.querySelector('#all-members')
//     console.log('this is the list', listOfEmployee)
//     for(let i = 0; i < listOfEmployee.length; i++){
//         const memberSection = document.createElement('section');
//         const nameAndPostion = document.createElement('div');
//         const nameOfMember = document.createElement('h2');
//         const postionOfMember = document.createElement('h3');
//         const listInfoMemeber = document.createElement('ul');
//         const idOfMember = document.createElement('li');
//         const emailOfMember = document.createElement('li');

//         memberSection.classList.add('member');
//         nameAndPostion.classList.add('name-position');
//         nameOfMember.classList.add('name');
//         postionOfMember.classList.add('position');
//         listInfoMemeber.classList.add('member-info');

//         nameOfMember.innerHTML = listOfEmployee.name
    
//         allMembers.appendChild(memberSection)
//         memberSection.appendChild(nameAndPostion);
//         memberSection.appendChild(listInfoMemeber);
//         nameAndPostion.appendChild(nameOfMember);
//         nameAndPostion.appendChild(postionOfMember);
//         listInfoMemeber.appendChild(idOfMember);
//         listInfoMemeber.appendChild(emailOfMember);
        
   
//       }