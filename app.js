// //Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
 
// // Prompt the user for a number
// var userInput = prompt("Enter a number:");

// // Convert the user input to a number
// var number = parseFloat(userInput);

// // Check if the conversion was successful
// if (!isNaN(number)) {
//     // Perform arithmetic operations
//     var square = number * number;
//     var cube = number * number * number;
//     var squareRoot = Math.sqrt(number);

//     // Display the results in the browser
//     document.write("<h2>Arithmetic Results</h2>");
//     document.write("<p>Number: " + number + "</p>");
//     document.write("<p>Square: " + square + "</p>");
//     document.write("<p>Cube: " + cube + "</p>");
//     document.write("<p>Square Root: " + squareRoot + "</p>");
// } else {
//     // Display an error message if the input is not a valid number
//     document.write("<p>Invalid input. Please enter a valid number.</p>");
// }


// // Q2. What will be the output in variables a, b & result after execution of 
// // the following script: var a = 2, b = 1; var result = --a - --b + ++b + b-
// // -; 

// var a = 2, b = 1;
//  var result = --a ; 
// console.log("The Value of --a at this stage is : " + a);
// var subt = --a - --b ;
// console.log("The Value of --a - --b at this stage is = "+ subt );
//  var addi= --b + ++b ;
//  console.log("The Value of --b + ++b at this stage is : " + addi);
// var addi2 = ++b + b--;
// console.log("The Value of ++b + b-- at this stage is : " + addi2);
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log("The result is " + result);

// // Q3. Write a program that takes input a name from user & greet the user.  

// // Prompt the user for their name
// var userName = prompt("Enter your name:");

// // Display a personalized greeting
// if (userName !== null && userName !== "") {
//     document.write("<h2>Hello, " + userName + "!</h2>");
// } else {
//     // Display a generic greeting if the user didn't enter a name
//     document.write("<h2>Hello, there!</h2>");
// }


// // Q4. Write a program to take input a number from user & display its 
// // multiplication table on your browser. If user does not enter a new 
// // number, multiplication table of 5 should be displayed by default.

// // Prompt the user for input
// var userInput = prompt("Enter a number for the multiplication table:");

// // If the user didn't provide a number, set it to 5 by default
// var number = userInput ? parseInt(userInput) : 5;

// document.write("<h2>Multiplication Table for " + number + "</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Multiplier</th><th>Result</th></tr>");

// // Display the multiplication table for the entered number
// for (var i = 1; i <= 10; i++) {
//     document.write("<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>");
// }

// document.write("</table>");



// // Q5. Take  
// // a) Take three subjects name from user and store them in 3 different 
// // variables.  
// // b) Total marks for each subject is 100, store it in another variable.  
// // c) Take obtained marks for first subject from user and stored it in 
// // different variable.  
// // d) Take obtained marks for remaining 2 subjects from user and store 
// // them in variables.  
// // e) Now calculate total marks and percentage and show the result in 
// // browser like this. (Hint: user table) 

//  // Take input for three subjects
//  var subject1 = prompt("Enter name of subject 1:");
//  var subject2 = prompt("Enter name of subject 2:");
//  var subject3 = prompt("Enter name of subject 3:");

//  // Total marks for each subject
//  var totalMarks = 100;

//  // Take obtained marks for each subject
//  var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
//  var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
//  var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

//  // Convert obtained marks to integers
//  obtainedMarks1 = parseInt(obtainedMarks1);
//  obtainedMarks2 = parseInt(obtainedMarks2);
//  obtainedMarks3 = parseInt(obtainedMarks3);

//  // Calculate total obtained marks and percentage
//  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//  var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//  // Display the results in a table
//  document.write("<h2>Result</h2>");
//  document.write("<table border='1'>");
//  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//  document.write("<tr><th colspan='2'>Total Obtained Marks</th><td>" + totalObtainedMarks + "</td></tr>");
//  document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
//  document.write("</table>");