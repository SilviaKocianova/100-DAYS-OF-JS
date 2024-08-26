/*
This file is quite different. I searched for functions I didn't
remember and wanted to write them down, so I can come back
to them later.
*/

/*ADVANCED ARRAY SEARCHING*/
const colours = ["red", "blue", "yellow", "green"];
const targetColour = colours.find(colour => {
    return colour.includes("y");
});

console.log(targetColour);