const prompt=require("prompt-sync")({sigint:true});14

const a = parseInt(prompt("type a"));
const b=  parseInt(prompt("type b"));

const product = a*b;

console.log(product)