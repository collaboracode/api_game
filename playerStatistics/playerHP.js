/*Should grabbing a player's name and HP be in itself a route or a function*/
/**
 *
 * @param {string} playerName
 * @param {number} age
 * @param {number} health
 * @param {number} hunger
 * @param {number} thirst
 *
 * @returns {Player}
 */

//Array of status conditions
//Crippled, Nauseated, Drowsy?

//Alternate way that this could perhaps be created

export default function createCharacter(playerName, age) {
  const newCharacter = Object.create(this);
  newCharacter.playerName = playerName;
  newCharacter.age = age;
  return newCharacter;
}

//Each of the status effects below are how they should scale; default value is of course 0 when starting
const player = {
  name: "Soupari Gallon / Galsoupari",
  age: 26,
  health: 200, //Base HP level
  hunger: 100, //Base Hunger level
  thirst: 100, //Base Thirst level


  //Severity determines the type of status effect a player will possess. 
  body: {
    head: {
      status: [
        { statusName: "headache", severity: 20 },
        { statusName: "concussion", severity: 40 },
        { statusName: "brainDamage", severity: 60 },
      ],
    },
  },

  //Same here, this is what the scale would look like. 50 being the worst.
  psyche: {
      status: [
        { statusName: "nervous", severity: 10 },
        { statusName: "anxious", severity: 20 },
        { statusName: "stressed", severity: 30 },
        { statusName: "insane", severity: 40 },
        { statusName: "psycho", severity: 50 },
      ],
    },
  


  //The Special Points start at Level 0 and can scale up dependent on different situations.
  uniqueSpecialPoints: [
    { skillName: "Strength", level: 0 },
    { skillName: "Perception", level: 0 },
    { skillName: "Endurance", level: 0 },
    { skillName: "Charisma", level: 0 },
    { skillName: "Intelligence", level: 0 },
    { skillName: "Agility", level: 0 },
    { skillName: "Luck", level: 0 },
  ],
};

//Add new file which goes over different scenarios in which these elements can change.
