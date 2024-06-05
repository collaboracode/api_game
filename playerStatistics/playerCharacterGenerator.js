 import playerHP from "./playerHP.js";


 
export default class playerCharacterGenerator{
    /**
     * @param {string} playerNameRandom
     * @param {number} age
     * @param {number} health
     * @param {number} hunger
     * @param {number} thirst 
     * @param {Object} mySpecialPoints 
     * 
     * 
     * @returns {Player} 
     */


        //Action points should be added to the character generator 
        //What kind if actions can the player do? 
        //possible parameters: source, destination, health, attack power
        //Define the actions within an array of possible actions; parameters those types of might have.
        //Item used, no item, 
        //Action examples: chop down a tree, gather sticks, filter water

        /*
        { Action: "Strength", level: 0 },
    { skillName: "Perception", level: 0 },
    { skillName: "Endurance", level: 0 },
    { skillName: "Charisma", level: 0 },
    { skillName: "Intelligence", level: 0 },
    { skillName: "Agility", level: 0 },
    { skillName: "Luck", level: 0 }
        */

   constructor(){
        this.playerNameRandom = this.selectRandomName()
        this.age = Math.floor(Math.random() * 100)
        this.health = 200;
        this.hunger = 100;
        this.thirst = 100;
        this.mySpecialPoints = this.assignSpecialPoints()
        //undefined array for special points
    }

    selectRandomName(){
        let arrayOfRandomNames = ["Galsoupari", "Soupari Galvin", "SoGalvin Pari", "Galenso Alapari", "Bob"]
        const number = Math.floor(Math.random() * 4)
        return arrayOfRandomNames[number]
        
    }

    //How can I give the special points as an array to a generated player? 
    assignSpecialPoints(){
        playerHP.uniqueSpecialPoints.forEach(SP => {
            SP.level = Math.floor(Math.random() * 9)
            return SP

            
        })
    }

   



    /*Moving on... Special Point Allocation; take a number of say 50 
    points. Keep subtracting from it until the total is 0. Classes maybe?
    */
}

 
