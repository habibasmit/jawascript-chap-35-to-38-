// chapter 35 to 38 
// functions

//question 01 : Write a function that displays current date & time in your browser.
// function currentDate() {
//   var date = new Date()
//   date.getDay()
//   console.log(date);
// }
// currentDate();

// question 02 : Write a function that takes first & last name and then it greets the user using his full name.
// function myFunction(){
//   var firstName = prompt("Enter your First Name?")
//   var lastName = prompt("Enter your Last Name?")
//   var fullName = firstName +  " " + lastName
//   console.log("Hello " + fullName  + "!");
// }
// myFunction();

// question 03 : Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// var num1 = +prompt("value of num 1 ");
// var num2 = +prompt("value of num 2 ");
// function num(a, b){
//   let num = a + b
//   console.log(num);
// }
// num(num1, num2)

//question 04 : Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// function myFunction(num1, operator, num2) {
//   if (operator === "+") {
//     var result = num1 + num2;
//     console.log(result);
//   } else if (operator === '-') {
//     var result = num1 - num2;
//     console.log(result);
//   }
//   else if (operator === '*') {
//     var result = num1 * num2;
//     console.log(result);
//   }
//   else if (operator === '/') {
//     var result = num1 / num2;
//     console.log(result);
//   }
//   else {
//     console.log(result);('Invalid Operator')
//   }
// }
// var num1 = +prompt('Enter first number');
// var operator = prompt('Enter operator');
// var num2 = +prompt('Enter Second number');
// myFunction(num1, operator,num2);

// question 05 : Write a function that squares its argument. 
// function squareNumber() {
//   var userInput = prompt("enter a number to be a sauares?");
//   var number = Number(userInput); // صارف کا ان پٹ نمبر میں تبدیل کرنا
//   var result = number * number;
//   alert("square : " + result);
// }
// squareNumber();

// question 06 : Write a function that computes factorial of a number.
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   var result = 1;
//   for (var i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// function myFunction() {
//   var userInput = prompt("Please enter a number:");
//   var number = Number(userInput); // Convert user input to number
//   var result = factorial(number);
//   alert("Factorial: " + result);
// }

// myFunction();

// question 7 : Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);

// question 8 : Write a nested function that computes hypotenuse of a right angle triangle.
// function computeHypotenuse(a, b) {
//   var squareA = a * a;
//   var squareB = b * b;
//   var sumOfSquares = squareA + squareB;
//   var hypotenuse = Math.sqrt(sumOfSquares);
//   console.log("Hypotenuse: " + hypotenuse);
// }

// var sideA = 3;
// var sideB = 4;
// computeHypotenuse(sideA, sideB); // Hypotenuse: 5

// question 9 : Write a function that calculates the area of a rectangle.
// function myFunction() {
//   var length = prompt("Please enter the length of the rectangle:");
//   var width = prompt("Please enter the width of the rectangle:");
//   var lengthNum = parseFloat(length);
//   var widthNum = parseFloat(width);
//   var area = lengthNum * widthNum;
//   console.log("The area of the rectangle is: " + area);
// }
// myFunction();

// question 10 : Write a JavaScript function that checks whether a passed string is palindrome or not?
// function palindrome(str) {
//       var check = '';
//       for (var i = str.length - 1; i >= 0; i--) {
//             check += str[i]
//       }
//       if (str === check) {
//             alert(str + ' is a plindrome word')
//       }
//       else {
//             alert(str + ' is  not a plindrome word')

//       }
// }
// var str = prompt('Write a plindrome word')
// palindrome(str);

// questionn 11 : Write a JavaScript function that accepts a string as aparameter and converts the first letter of each word of the string in upper case.
// function UpperCase(str) {
//     var arr = str.split(' ');
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArray.join(' ')
// }
// var str = 'the quick brown fox'
// var result = UpperCase(str)
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// question 12 : Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function findLongestWord(str) {
//   var words = str.split(' ');
//   var maxLength = 0;
//   var longestWord = "";
//   words.forEach(function(word) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       longestWord = word;
//     }
//   });
//   return longestWord;
// }
// var exampleString = 'Web Development Tutorial';
// var longestWord = findLongestWord(exampleString);
// console.log("Longest word:", longestWord);

// question 13 : Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' 
// function countOccurrences(str, letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// var str = 'JSResourceS.com';
// var letter = 'o';
// var occurrences = countOccurrences(str, letter);
// console.log("Occurrences of '" + letter + "' in '" + str + "': " + occurrences); 

// question 14 :  The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference.toFixed(2));
// }
// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   console.log("The area is " + area.toFixed(2));
// }
// var radius = prompt("Enter radius of circle?");
// calcCircumference(radius); 
// calcArea(radius); 


// ==================  chapter 35 to 38 end  ==========================