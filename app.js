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

//         console.log(`visit reddit.com/r/ ${subreddits[i]}`)
//     }

// for (let ayan of subreddits){
//     console.log(ayan)
// }

// const score = {
//     English: 85,
//     Maths: 95,
//     Science: 85,
//     SocialScience: 85,
//     marathi: 75,
//     Hindi: 65
// }

// for (let subject in score){
//     console.log(`${subject} scored ${score[subject]}`)
// }

// let total = 0;
// let scores = Object.values(score);
// console.log('scores',scores, Object.keys(score));
// for(let score of scores){
//     total = total +  score;
// }

// console.log(total / scores.length)

// for (let ayan of 'Altamash'){
//     console.log(ayan)
// }

// TODO LIST
// let input = prompt('What would you like to do?');
// while (!input) {
//     input = prompt('What would you like to do?');
// }

// if (input === 'new') {
//     let work = prompt('Enter new todo');
//     console.log(work);
// }

// let input = prompt("What would you like to do?");

// const todos = ["collect chickens from eggs", "clean litter box"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("**********************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(i, todos[i]);
//     }
//     console.log("**********************");
//     // todos.push(list);
//   } else if (input === "new") {
//     const newTodo = prompt("Ok, what is the new todo?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list!`);
//   } else if (input === "delete") {
//     const index = parseInt(prompt("Ok, Enter an index to delete:"));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`ok, deleted ${deleted[0]}`);
//     } else {
//       console.log("Unknown index");
//     }
//   }
//   input = prompt("What would you like to do?");
// }

// console.log("OK YOU QUIT THE APP");

// LEARNING FUNCTION

// function tellMyName(){
//   console.log("my")
//   console.log("name")
//   console.log("is")
//   console.log("altamash")
// }

// function singSong() {
  // console.log("DO")
//   console.log("RE")
//   console.log("MI")
// }

// function greet(firstName){
//   console.log(`firstName is: ${firstName} `)
// }

function rant(message){
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

// function isShortsWeather(temperature){
//   if (temperature >= 75){
//     return true
//   } else{
//     return false
//   }
// }

// function lastElement(num){
// return num[num.length-1];
// }
// console.log(lastElement([1, 2, 3])); 


// function capitalize(text){
//   let capital = text[0].toUpperCase()+text.slice(1)
//   return capital
// }

// function returnDay(num){
//   if (num < 1 || num > 7){
//     return null
//   } else {
//     let dayOfWeek = {
//       1: 'Monday',
//       2: 'Tuesday',
//       3: 'Wednesday',
//       4: 'Thursday',
//       5: 'Friday',
//       6: 'Saturday',
//       7: 'Sunday'
//     }

//     return dayOfWeek[num]
//   }
// }

// let nums = [11,22,32,42,25]
// function add(arr){
//   let total = 0
// for(let i=0; i<arr.length;i++){
//   total = total+arr[i]
// }

// return total
// }

// function lastElement(num){
//   if (num == []){
//     return null
//   }
//   return num[num.length - 1]
// }


// ***************
// FUNCTION SCOPE
// ***************

// let totalEggs = 0;
// function collectEggs(){
//    totalEggs = 6;
// }
// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)

// let bird = 'Scarlet Macaw'

// function birdWatch(){
//    bird = 'Grest Blue Heron'
//    console.log(bird)
// }

// birdWatch()
// console.log(bird)


// let deadlyAnimal = "Blue-Ringed Octopus";
 
// function handleAnimal() {
//      deadlyAnimal = "Scorpionfish";
//     console.log(deadlyAnimal);
// }
 
// handleAnimal();
// console.log(deadlyAnimal)



// *************
// BLOCK SCOPE
// *************

// let radius = 8;
// if(radius > 0){
//   const PI = 3.14159;
//   let msg = 'HIII!'  
// }
// console.log(msg)


// for (var i = 0; i < 5; i++){
//   var msg = 'sagdhfjfdfsf'
// }
// console.log(msg)
// console.log(i)



// **************
// LEXICAL SCOPE
// **************

// function bankRobbery(){
//   const heroes = ['Spider-man', 'Wolverine', 'Black-Panther', 'Iron-Man']

//   function cryForHelp(){
//     function inner(){
//     for (let hero of heroes){
//       console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//     }
//   }
//   inner()
//   }
//   cryForHelp();
// }


// function add(x,y){
//   return x + y
// }

// const add = function(x,y){
//   return x+y
// }

// let square = function(num){
//   return num*num;
// };


// function lastElement(array){
//   if(array.length === 0){
//     return null
//   } else{
//     return array[array.length -1]
//   }
// }


// function capitalize(text){
//   let capital = text [0].toUpperCase();
//   return capital+text.splice(1);
// }

// **************
// HIGH ORDER FUNCTION
// **************

// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f){
//   for (let i = 0; i < 10; i++){
//     f()
//   }
// }

// function rollDie(){
//   const roll = Math.floor(Math.random() * 6) + 1
//   console.log(roll)
// }

// callTwice(rollDie)



// ************
// RETURNING FUNCTION
// ************

// function makeMysteryFunc(){
//   const rand = Math.random()
//   if (rand > 0.5){
//     return function (){
//       console.log('CONGRATS, I AM A GOOD FUNCTION')
//       console.log('YOU WIN  A MILLION DOLLARS')
//     } 
//   }
//   else {
//     return function() {
//       alert("Your number is less than 0.5")
//       alert("Try Again!!!!")
//       alert("Try Again!!!!")
//       alert("Try Again!!!!")
//     }
//   }
// }

// function isBetween(num){
//   return num >= 50 && num <= 100
// }

// function isBetween2(num){
//   return num >= 1 && num <= 10
// }


// function makeBetweenFunc(min, max){
//   return function(num){
//     return num >= min && num <= max
//   }
// }

// const isChild = makeBetweenFunc(0,18)
// const isAdult = makeBetweenFunc(19,64)
// const isSenior = makeBetweenFunc(65,120)


// ***********
// METHOD

const mathBasics = {
  pi: 3.14159,
  square(num){
    return num*num
  },
  cube(num){
    return num ** 3
  }
}

const square = {
  area(length){
    return length * length
  },
  perimeter(length){
    return 4 * length
  }
}

// *********
// THIS 
// const cat = {
//   name: 'Blue Steele',
//   color: 'Grey',
//   breed: 'Scottish fold',
//   meow(){
//     console.log(`${this.name} says my color is grey and i'm a scottish breede`)
//   }
// }

// const meow2 = cat.meow


// TRY AND CATCH

// function yell(msg){
//   console.log(msg.toUpperCase())
// }

// function yell(msg){
//   try{
//   console.log(msg.toUpperCase())
//   } catch (e){

//     console.log(e,"Please pass a string next time!")
//   }
// }



// let hen = {
//   name: 'Helen',
//   eggCount: 0,
//   layAnEgg(){
//       this.eggCount = this.eggCount+1;
//       return "EGG";
//   }
// };


// const numbers = [11, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// for(let i = 0; i <= numbers.length; i++){
//   console.log(i)
// }

// for (let num in numbers){
//   console.log(numbers[num])
// }

// for (let num of numbers){
//   console.log(num)
// }



// function print(element){
//   console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function (element){
//   console.log(element)
// })

// numbers.forEach(function (element){
//   if (element % 2 === 0){
//     console.log(element)
//   }
// })


// const movies = [
//   {
//     title: 'Amadeus',
//     score: 99
//   }, 

//   {
//     title: 'stand by me',
//     score: 85
//   }, 

//   {
//     title: 'parasite',
//     score: 95
//   },

//   {
//     title: 'Alien',
//     score: 90
//   }
// ]

// const titles = movies.map(function (movie){
//   return movie.title.toUpperCase()
// })

// console.log(titles);

// const ayan = movies.map(function (movie){
//   return `${movie.title} - ${movie.score / 10}`
// })


// function movie(name){
//   console.log(name)
// }

// movies.forEach(movie)


// movies.forEach(function (name){
//   console.log(`${name.title} - ${name.score} / 100`)
// })


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const doubles = numbers.map(function (num){
//   return num * 2
// })x

// const add = (x,y) => {
//   return x + y
// }

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1
// }

// const rollDie = () => (
//    Math.floor(Math.random() * 6) + 1
// )


// const marks = movies.map(movie => {
//   return `${movie.title} - ${movie.score / 10}`
// })

// setTIMEOUT AND setINTERVAL

// console.log("Hello!!!")
// setTimeout(() => {
//   console.log("Are you still there?")
// },3000)

// console.log("Goodbye")


// setInterval(() => {
//   console.log(Math.floor(Math.random() * 6))
// },2000)

// const id = setInterval(() => {
//   console.log(Math.floor(Math.random() * 6))
// },2000)


// FILTER

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// numbers.filter(n => {
//   return n < 10
// })

// const movies = [
//   {
//     title: 'Amadeus',
//     score: 100,
//     year: 1984
//   }, 

//   {
//     title: 'Sharkando',
//     score: 85,
//     year:2013
//   }, 

//   {
//     title: 'parasite',
//     score: 55,
//     year: 2023
//   },

//   {
//     title: 'Alien',
//     score: 20,
//     year: 2001
//   },

//   {
//     title: 'parjawanasite',
//     score: 85,
//     year: 2023
//   },

//   {
//     title: 'pathanb',
//     score: 90,
//     year: 2024
//   },

//   {
//     title: 'koi mil gaya',
//     score: 100,
//     year: 2012
//   },
// ]

// const goodMovies = movies.filter(m => m.score > 80)
// const badMovies = movies.filter(m => m.score < 80)

// const recentMovies = movies.filter(m => m.year > 2015)

// const hitMovies = movies.filter(m => m.score > 80).map(m => m.title)


// const validUserNames = (userName => (
//    validUserNames.length < 10
// ))

// const validUserNames = (usernames) => {
//   let filteredUsername = usernames.filter((username) => username.length < 10);
// }

// console.log("Hello Ayan")

// setTimeout(() => {
//   console.log("Ayan are you there ?")
// }, 3000)

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// setInterval(() => {
//   let randomNum = Math.ceil(Math.random() * 9) + 1
//   let result = sum(randomNum, 2); 
//   console.log(result);
// }, 2000);

// ***************
// SOME AND EVERY

// const exams = [80, 98, 78, 60, 95, 20]
// let results = exams.every(score => score >= 50)
// let result = exams.some(score => score >= 50)


// *******************\
// REDUCE AND THIS
const prices = [25, 120, 80, 10, 50, 30]

// let total = 0;
// for (let price of prices){
//   total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => total + price)

// const minPrice = prices.reduce((min, price) =>{
//   if(min > price){
//     return min
//   } return price
// })


const movies = [
  {
    title: 'Amadeus',
    score: 100,
    year: 1984
  }, 

  {
    title: 'Sharkando',
    score: 85,
    year:2013
  }, 

  {
    title: 'parasite',
    score: 55,
    year: 2023
  },

  {
    title: 'Alien',
    score: 20,
    year: 2001
  },

  {
    title: 'parjawanasite',
    score: 85,
    year: 2023
  },

  {
    title: 'pathanb',
    score: 90,
    year: 2024
  },

  {
    title: 'koi mil gaya',
    score: 101,
    year: 2012
  },
]

const highRated = movies.reduce((bestMovie, currMovie) =>{
  if (currMovie.score > bestMovie.score){
    return currMovie
  } return bestMovie 
})

// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num, 100)



// const person = {
//   firstName: 'Khan',
//   lastName: 'Altamash',
//   fullName:  () =>{
//     return `${this.firstName} ${this.lastName}`
//   },
//   shoutName: function (){
//     setTimeout(() => {
//       console.log(this)
//     })
//   }
// }


// *******************
// NEWER JAVASCRIPT FEATURES

function rollDie(numSides){
  if(numSides === undefined){
    numSides = 6
  }
  return Math.floor(Math.random() * numSides) + 1
}