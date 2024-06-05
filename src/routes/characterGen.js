import playerCharacterGenerator from "../../playerStatistics/playerCharacterGenerator.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

export default function characterGenerator(req, res){
    const player = new playerCharacterGenerator()
    

    res.json(player)
}