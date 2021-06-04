/*
    CIT 281 Project 1
    Name: Caralee Chenoweth
*/
let letters = "abcdefghijklmnopqrstuvwxyz"; 
let output = "";

// returns randomized letter randomized length between 5-25
function alphabet(){ 
    randomletter = letters[getRandomInteger(0,27)];
    let string_length = getRandomInteger(5,26);
    for ( let i = 0; i < string_length; i++) {
    output = randomletter.repeat(string_length);
    };
    console.log(output);
};

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
