/*
Action: [
    { actionName: "pourWater", itemUsed: 0 },

  ],

  https://blog.axway.com/learning-center/software-development/api-development/beginners-javascript-objects-and-arrays-2
*/


const playerActions = {
    Action: [
        {actionName: "playerMove", itemUsed: 0},
        {actionName: "playerSleep", itemUsed: 0},
        {actionName: "playerIdle", itemUsed: 0},
        {actionName: "playerHeal", itemUsed: 0},
        {actionName: "playerCook", itemUsed: 0},
        {actionName: "playerFight", itemUsed: 0},
        {actionName: "playerUseItem", itemUsed: 1},
        {actionName: "playerTalk", itemUsed: 0},
        {actionName: "playerSendMessage", itemUsed: 0},
        {actionName: "playerSuspend", itemUsed: 0}

    ]
}

const playerBuffScenarios = [
    {scenario: "Player is well-rested", effect: 0},
    {scenario: "Player drinks clean water", effect: 0},
    {scenario: "Player eats a cooked or non-perishable food item", effect: 0},
    {scenario: "Player reads a book", effect: 0},
    {scenario: "Player crafts a tool", effect: 0},
    {scenario: "Player befriends a stranger", effect: 0},
    {scenario: "Player builds a campsite", effect: 0},
    {scenario: "Player gathers loot", effect: 0},
    {scenario: "Player successfully hunted an animal", effect: 0},
    {scenario: "Player damages another player/npc", effect: 0},
    


]


const playerDebuffScenarios = [
    {scenario: "Player trips over branch", effect: 0},
    {scenario: "Player burns their hand", effect: 0},
    {scenario: "Player drinks tainted water", effect: 0},
    {scenario: "Player gets bit by wild animal", effect: 0},
    {scenario: "Player is shot by a gun", effect: 0},
    {scenario: "Player is sleep deprived", effect: 0},
    {scenario: "Player is dehydrated", effect: 0},
    {scenario: "Player is lost in the (insert biome here)", effect: 0},
    {scenario: "Player is low on stamina", effect: 0},
    {scenario: "Player has no protection against the elements", effect: 0},

]




/*const playerDebuffScenarios = [

    {scenario: "Player trips over branch", effect: health - 1},
    {scenario: "Player burns their hand", effect: health - 3},
    {scenario: "Player drinks tainted water", effect: health - 1},
    {scenario: "Player gets bit by wild animal", effect: health - 1},
    {scenario: "Player is shot by a gun", effect: health - 1}

]



//Create either a random character generator or a class based system; something that pre-assigns points to each of the special attributes
//Follow soup's example of making an API call. Try to make an API call. 

//Look up unreal map generation examples. Something a bit older to start off with UR3 perhaps first. 

*/