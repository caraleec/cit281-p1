/*
    CIT 281 Project 1
    Name: Caralee Chenoweth
*/

let dayOfweek = new Array(); 
    dayOfweek[0] = "Sunday";
    dayOfweek[1] = "Monday";
    dayOfweek[2] = "Tuesday"; 
    dayOfweek[3] = "Wednesday"; 
    dayOfweek[4] = "Thursday"; 
    dayOfweek[5] = "Friday";
    dayOfweek[6] = "Saturday";

let day = new Date();
let answer = day.getDay();
console.log(dayOfweek[answer]);

