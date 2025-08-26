// Variable Declarations using  let and const
let name = "Samwel Mburu"; // Using let for a variable that may change
const birthYear = 2000; // Using const for a variable that won't change
let country = "Kenya"; // Using let for a variable that may change
// Output the variables to the console
console.log(`My name is ${name} I was born in the year ${birthYear}, Eldama Ravine, ${country}`); 

// Data Types 
let age = 24; // Number
console.log(age)
let isStudent = true; // Boolean
console.log(isStudent)
let address; // Undefined
console.log(address)
let phoneNumber = null; // Null
console.log(phoneNumber)
let hobbies = ["reading", "traveling", "coding"]; // Array
console.log(hobbies)
// This is an Object
let person = { 
    firstName: "Samwel",
    lastName: "Mburu",
    age: 24
};
// Output the data types to the console
console.log(person)

// Operators => Addition, Subtraction, Multiplication, Division, Modulus, Exponentiation
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2); 
console.log(num1 * num2); 
console.log(num1 / num2); 
console.log(num1 % num2); 
console.log(num1 ** num2); 

// Comparison Operators => Equal to, Greater than, Less than, Greater than or equal to, Less than or equal to
console.log(num1 == num2); 
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2); 

//Condiional Statements => if, else if, else, 
let personAge = 18;
if (personAge < 18) {
    console.log("You are a child.");
}
else if (personAge === 18) {
    console.log("You are a teeneger.");
}
else {
    console.log("You are an adult.");
}

// Capturing User Input using prompt
let userName = prompt("Enter your name:");
console.log(`Hello, ${userName}! Welcome to the JavaScript basics tutorial.`);
let userAge = prompt("Enter your age:");
console.log(`You are ${userAge} years old.`);
let userCountry = prompt("Enter your country:");
console.log(`You are from ${userCountry}.`);

//Modifying the DOM
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");
const checkBtn = document.getElementById("checkBtn");


checkBtn.addEventListener("click", function() {
  let userName = nameInput.value;
  let userAge = Number(ageInput.value);

  // Conditional logic
  if (userName === "" || isNaN(userAge)) {
    output.innerText = "Please enter your name and a valid age.";
  } else if (userAge >= 18) {
    output.innerText = "Hello " + userName + "! You are old enough to vote.";
  } else {
    output.innerText = "Hello " + userName + "! You are not old enough to vote.";
  }
});

// 1. Greeting function
function greetUser() {
  let name = document.getElementById("name").value;
  let greetOutput = document.getElementById("greetOutput");

  if (name.trim() === "") {
    greetOutput.innerText = "Please enter your name.";
  } else {
    greetOutput.innerText = "Hello, " + formatString(name) + "!";
  }
}

// Helper function: format string (capitalize first letter)
function formatString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// 2. Voting eligibility function
function checkVoting() {
  let age = Number(document.getElementById("age").value);
  let voteOutput = document.getElementById("voteOutput");

  if (isNaN(age) || age <= 0) {
    voteOutput.innerText = "Please enter a valid age.";
  } else if (age >= 18) {
    voteOutput.innerText = "You are eligible to vote.";
  } else {
    voteOutput.innerText = "You are not eligible to vote.";
  }
}

// 3. Total calculator function
function calculateTotal() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let totalOutput = document.getElementById("totalOutput");

  if (isNaN(num1) || isNaN(num2)) {
    totalOutput.innerText = "Please enter valid numbers.";
  } else {
    totalOutput.innerText = "The total is: " + (num1 + num2);
  }
}

// 4. Toggle content function
function toggleContent() {
  let text = document.getElementById("toggleText");

  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// For Loop Example: Generate numbers 1–10
function generateNumbers() {
  let numberList = document.getElementById("numberList");
  numberList.innerHTML = ""; 

  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerText = "Number " + i;
    numberList.appendChild(li);
  }
}

// While Loop Example: Countdown from 5
function startCountdown() {
  let countdownOutput = document.getElementById("countdownOutput");
  let count = 5;
  let result = "";

  while (count > 0) {
    result += count + "... ";
    count--;
  }
  result += "Go!";
  countdownOutput.innerText = result;
}

// forEach Loop Example: Display fruits
function showFruits() {
  let fruits = ["Apple", "Banana", "Orange", "Mango"];
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; 

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.innerText = fruit;
    fruitList.appendChild(li);
  });
}

 // Change text
    document.getElementById("changeBtn").addEventListener("click", function() {
      document.getElementById("text").innerText = "The text has been updated!";
    });

    // Toggle highlight class
    document.getElementById("toggleBtn").addEventListener("click", function() {
      document.getElementById("toggleText").classList.toggle("highlight");
    });

    // Add new items to list
    document.getElementById("addBtn").addEventListener("click", function() {
      let input = document.getElementById("itemInput");
      if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = input.value;
        document.getElementById("itemList").appendChild(li);
        input.value = ""; // clear input
      }
    });

    // Clear all items
    document.getElementById("clearBtn").addEventListener("click", function() {
      document.getElementById("itemList").innerHTML = "";
    });