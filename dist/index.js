"use strict";
// arrays
let names = ["Imad", "Oualid", "Mehdi"];
let ages = [19, 20];
names.push("Yubie");
ages.push(18);
// type inference with arrays
let fruits = ["apples", "pears", "bananas", "mangos"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
// object literals
let user = {
    firstName: "Someone",
    age: 20,
    id: 2,
};
user.firstName = "Imad";
user.id = 1;
// type inference with object literals
let person = {
    name: "Someone",
    score: 35,
};
person.name = "Imad";
person.score = 65;
const score = person.score;
