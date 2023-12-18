#! /usr/bin/env node

import select from '@inquirer/select';
import chalk from 'chalk';
import inquirer from 'inquirer';
import interactivePrompt from './interactivePrompt.mjs';

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

console.log(chalk.red.bold('Welcome to MonsterSearch!'))
console.log('Your CLI D&D Companion to find useful info on 5e monsters.\n')
console.log(chalk.bold('Naming convention:'))
console.log('   all lowercase letters')
console.log('   use dashes("-") for spaces\n')

const printStats = async (monsterName) => {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monsterName}`, requestOptions)
  .then(response => response.json())
  .then(result => console.log('Name: ',result.name, 
  '\nSize: ',result.size,
  '\nType: ',result.type,
  '\nAlignment: ',result.alignment,
  '\nHit Points: ',result.hit_points,
  '\nChallenge Rating: ', result.challenge_rating,
  '\nXP: ', result.xp,
  '\n\nSTATS - ',
  'STR: ',result.strength,
  'DEX: ',result.dexterity,
  'CON: ',result.constitution,
  'INT: ',result.intelligence,
  'WIS: ',result.wisdom,
  'CHA: ',result.charisma,
  
  ))
  
  .catch(error => console.log('error', error));
};


//In progress prompt to push lists in SpellSearch 

/*inquirer.prompt([
    { type:'list',
    message: "Select filter option:",
    name: 'menuOptions',
    choices: [
        'Monster Type',
        'Monster Name'
    ]}
])
.then(({menuOptions}) => {
    
  if (menuOptions === 'Monster Type') {

    

  } else {
    const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "input",
        name : "monsterName",
        message: "Enter monster name: "
    },
]).then
    ((answers) => {
        const monsterName = answers.monsterName
        printStats(monsterName)
    });

  }
})
*/ 
  
const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "input",
        name : "monsterName",
        message: "Enter monster name: "
    },
]).then
    ((answers) => {
        const monsterName = answers.monsterName
        printStats(monsterName)
    });



   


  

