//Declare Arrays
let fruit = ["Apple","Grape","Avo"];

let vegetable = ["Onion","Potato","Sweet Potato"];

///////////////////////////////////////////////////////////

//Calculate total length of vegetables array
let oni = (vegetable[0].length);
let pot =(vegetable[1].length);
let swe =(vegetable[2].length);
let tot = oni + pot + swe;
console.log("Total length of the vegetable array: " +tot);

///////////////////////////////////////////////////////////

//combine the 2 arrays

let food = vegetable.concat(fruit);
console.log(food);

//////////////////////////////////////////////////////////

//Remove last 2 elements

food.pop();
food.pop()
console.log(food);

//////////////////////////////////////////////////////////

//Reverse the array

food.reverse();
console.log(food);

//////////////////////////////////////////////////////////

//Remove the first element

food.shift();
console.log(food);

//////////////////////////////////////////////////////////