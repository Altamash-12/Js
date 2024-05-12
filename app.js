// let random = Math.random();
// if (random < 0.5) {
//   console.log("Your Number is Less Than 0.5!!");
// } else {
//   console.log("Your number is Greater (or equal) to 0.5");
// }
// console.log(random);

// if (random >= 0.5) {
//   console.log("Your Number is Greater Than 0.5!!");
//   console.log(random);
// }

// const dayOfWeek = "monday";

// if (dayOfWeek === "monday") {
//   console.log("Hard Work Starts Here");
// } else if (dayOfWeek === "sunday") {
//   console.log("sunday is funday");
// } else if (dayOfWeek === "friday") {
//   console.log("Fridays Are good");
// } else {
//   console.log("MEH");
// }

// let age = 80;
// if (age < 5) {
//   console.log("You are a baby, you get for free ");
// } else if (age < 10) {
//   console.log("you are a child, you pay $10");
// } else if (age < 65) {
//   console.log("you are an adult, you pay $20");
// } else {
//   console.log("You are a Senior. you pay $10");
// }

// const password = prompt("Please Enter a New Password");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD!");
//   } else {
//     console.log("Password Cannot Contain Space");
//   }
// } else {
//   console.log("PASSWORD TOO SHORT! MUST BE OF 6+ CHARACTERS");
// }

// let userInput = prompt("Enter Something");

// if (userInput) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// if (userInput) {
//   if (userInput === "0") {
//     console.log("falsy");
//   } else {
//     console.log("truthy");
//   }
// } else {
//   console.log("Falsy");
// }

// const password = prompt("Enter Your Password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("VAlID PASSWORD");
// } else {
//   console.log("INCORRECT FORMAT FOR PASSWORD");
// }

// const age = prompt("Enter YOur Age");

// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("FREE");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age > 10 && age < 65) {
//   console.log("$20");
// } else {
//   console.log("Invalid Age");
// }

// const firstName = prompt("Enter YOur First Name");
// if (!firstName) {
//   firstName = prompt("Try Again!!!");
// }

// const day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;

//   default:
//     console.log("I Don't Know That");
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let ayan = 1; ayan <= 10; ayan++) {
//   console.log(ayan);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// i = i + 1;
// i += 1;s

// for (let i = 100; i >= 0; i = i - 10) {
//   console.log(i);
// }

// for (let i = 20; i <= 30; i++) {
//   console.log(i);
// }

// const animals = ["lion", "tigers", "bears", "Cat", "dog"];

// for (let i = 3; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i > -1; i--) {
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

// for (let i = 0; i < 5; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`          j is: ${j}`);
//   }
// }

// const seatingchair = [
//   ["Harry", "Ayan", "Akram"],
//   ["ajmal", "kalim", "abid", "farhan"],
//   ["hamza", "rehan", "kamran"],
// ];

// // for (let i = 0; i < seatingchair.length; i++) {
// //   const row = seatingchair[i];
// //   console.log(`Row is #${i + 1}`);
// //   for (let j = 0; j < row.length; j++) {
// //     console.log(row[j]);
// //   }
// // }

// for (let i = 0; i < seatingchair.length; i++) {
//   const row = seatingchair[i];
//   console.log(`Row is #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// let Password = "Faisal123";

// let User_input = prompt("Enter the Password");
// while (User_input !== Password) {
//   User_input = prompt("Enter the Password!!!");
// }

// console.log("Right Password");

// let input = prompt("Hey, Say Something!").toUpperCase();

// while (true) {
//   input = prompt(input).toUpperCase();
//   if (input.toLowerCase() === "stop copying me") break;
// }

// console.log("OK YOU WIN!");

// for (let i = 1; i <= 1000; i += 2) {
//   console.log(i);
//   if (i === 100) break;
// // }

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetnum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetnum);

// let guess = prompt("Enter your first guess (Try 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetnum) {
//   if (guess === "q") break;
//   guess = parseInt(guess);
//   if (guess > targetnum) {
//     guess = prompt("Too High! Enter a new guess:");
//     attempts++;
//   } else if (guess < targetnum) {
//     guess = prompt("Too Low! Enter a new Guess:");
//     attempts++;
//   } else {
//     guess = prompt("Invalid guess. please enter a number or 'q' to quit");
//   }
// }

// if (guess === "q") {
//   console.log("Ok, You Quit");
// } else {
//   console.log("CONGRATS YOU WIN");
// }

// if (attempts  <= 1){
//     console.log(`You Got it, it took you ${attempts} guess`)
// } else {
//   console.log(`You Got it, it took you ${attempts} guesses`);
// }

const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// for (let i = 0; i < subreddits.length; i++){
//     console.log(`visit reddit.com/r/ ${subreddits[i]}`)
// }

for (let ayan of subreddits) {
  console.log(ayan);
}
