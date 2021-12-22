//Functions for Character


function Character(name, strength, intelligence, charisma, dexterity, wisdom){
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.charisma = charisma;
    this.dexterity = dexterity;
    this.wisdom = wisdom;
};

function PlayerSelect(){
    this.player = {};
    this.playerId = 0; 
}

//Function for roll

function rollDice(){
    return (Math.ceil(Math.random()*6)*3);
 }