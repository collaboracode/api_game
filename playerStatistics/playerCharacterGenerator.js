 import playerHP from "./playerHP.js";


 
class playerCharacterGenerator{
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

export default playerCharacterGenerator
