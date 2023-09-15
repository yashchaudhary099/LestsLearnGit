
const prompt=require("prompt-sync")({sigint:true});14


const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

const sum = num1 + num2;
//Finally, the sum is displayed. To display the result, we have used the template literal ` `. 
//This allows us to include variables inside strings.
 
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//To include variables inside ``, you need to use the ${variable} format.