// Coding Steps:
// The answer to all questions must be printed to your Browser’s console -- using console.log():

console.log(`1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`); 
console.log('Question 1.');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages); //verifying that the array is correctly defined//

console.log(`1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!`);

console.log('Question 1a.');
console.log(ages.slice(-1) - ages[0]);//used slice() to return the last element fo the array//

console.log(`1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);

console.log('Question 1b.');
ages.push(45);
console.log(ages); //verify that new age was added to array ages//
// was successful, added to the end with using array.push();//

console.log(ages.slice(-1) - ages[0]);//works the same as 1a. question wiht different numbers used because push added
//the number to the end of the array and the request is to subtract the last array element from the first array element.//

console.log(`1c.	Use a loop to iterate through the array and calculate the average age.`);

console.log('Qustion 1c.');
let sum = 0;
for (let i = 0; i < ages.length; i++) {
   sum = sum += ages [i];//adds up all of the numbers in the ages array//
   average = (sum / ages.length);//takes the above added numbers and divides by the length
   //of the array to get the average age. Did the math and the average is correcte.//
} 
console.log(average);

console.log(`2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’`);

console.log('Question 2.');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names); //verified names array is printing correctly.//

console.log(`2a.	Use a loop to iterate through the array and calculate the average number of letters per name.`);

console.log('Question 2a.');
//console.log(names.toString()); //converting array into a string to count the value of each word.//

let total = 0;

for (let i = 0; i < names.length; i++) {
   total += names[i].length; //determines the characters in each word//
}
console.log(avg = total / names.length); //determines the average of the letters per word//

console.log(`2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
console.log('Question 2b.');
for (let i = 0; i < names.length; i++){
   console.log(names.join(' ')); //Joining array elements. With () commas are used
} //with ('') no commas are used but elements have no spaces and with (' ')
//elements are used with no commas and spaces are inserted.

console.log(`3.	How do you access the last element of any array?`);

console.log('Question 3.');
console.log(`console.log(names.length - 1) determines length of array, gives last arrays position.`);
console.log(`console.log(names[5]); prints element in current last location with the position known will not take into account changes.`);
console.log(`console.log(names[names.length - 1]); //prints last element of the array no matter if the postition changes.`);


console.log(`4.	How do you access the first element of any array?`);
console.log('Question 4.');
console.log(`console.log(names[0]); Putting the position/index in [] prints that element`);

console.log(`5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);
console.log('Question 5.');
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);//array.push adds the elements to the end of the array and gives a new array length.
//console.log(nameLengths);//if the console.log is done inside the curly brackets then it will print each iteration. 
}
console.log(nameLengths); //if the console.log is done outside of the curly brackets it prints just once.

// For example:

// let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
// let nameLengths = [5, 3, 4]; 			//create this new array


console.log(`6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
console.log('Question 6.');
console.log(`nameLengths = 0
for (let i = 0; i < names.length; i++) {
   nameLengths += names[i].length;
}
console.log(nameLengths);`);
   nameLengths = 0
for (let i = 0; i < names.length; i++) { //getting the sum of all of the elements of the array.
   nameLengths += names[i].length;
}
console.log(nameLengths);// confirmed this is printing the sum of the array.

console.log(`7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`);
console.log('Question 7.');

//let wordMultiple = (word, n) => {
   //should be some statements here getting word to iterate n number of times.
//}
//console.log should be the word printed the value of n.
//attempted this problem with different loops. Could not get a function created to properly complete request.



console.log(`8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`);
console.log('Question 8.');
let fullName = (firstName, lastName) => {
   return `${firstName} ${lastName}`; //using template literals as placeholders.
}
console.log(fullName('Franklin', 'Turtle')); //when printing the names need to be in quotes.

console.log(`9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
console.log('Question 9.');
let numbers = [16, 20, 64];//created array with numbers.
let sum3 = 0
for (let i = 0; i < numbers.length; i++) {
   sum3 = sum3 += numbers [i]; { //found sum of array
   }
}
console.log(sum3 > 100); //printing true if sum is more than 100 and false if less, tested.

console.log(`10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
console.log('Question 10.');

let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
   sum2 = sum2 += numbers [i];//adds up all of the numbers in the numbers array//
   average = (sum2 / numbers.length);//takes the above added numbers and divides by the length
   //of the array to get the average numbers. Did the math and the average is correcte.//
} 
console.log(average); //verified this number changes if the array elements change values.

console.log(`11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.d`);
console.log('Question 11.');
//let compareArrays = (array1, array2) => { //says to write a function, could not get this to work correctly.
let numbers2 = [2, 6, 12];
let sum4 = 0;
for (let i = 0; i < numbers2.length; i++) {
      sum4 = sum4 += numbers2 [i];
      average2 = (sum4 / numbers2.length);
   }
console.log(average2);
let numbers3 = [4, 8, 16];
let sum5 =0;
for (let i = 0; i < numbers3.length; i++) {
   sum5 = sum5 += numbers3 [i];
   average3 = (sum5 /numbers3.length);
}
console.log(average3);
console.log(average2 > average3);//printing the correct response


console.log(`12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
console.log('Question 12.');
let willBuyDrink = (isHotOutside, moneyinPocket) => { //created this function by taking the question and breaking it down into chunks.
   return (isHotOutside == isHotOutside && moneyinPocket > 10.50);
}
console.log(willBuyDrink(true, 10.51)); //tested by changing the amount of cash in the console.log where the value was passed in.

console.log(`13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.`);
console.log('Question 13.');
list = ['Amanda'];
//console.log(list);
let problemSolved = array => {
   list.push('Stefany', 'Michelle', 'Veronica', 'Alisa');
   list.sort();
}

console.log(problemSolved(list));
// printing the wrong response. Problem to solve was a list of names to be added to an array
//called list, then sort them alphabetically.