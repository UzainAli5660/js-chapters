// 1..// Declare & initialize an empty multidimensional array
var emptyMultidimensionalArray = [[]];






// 2..// Declare & initialize a multidimensional array representing the following matrix
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
      }








// 3..// Write a program to print numeric counting from 1 - 10
// for (i=1; i<=10; i++){
//     console.log(i);
// }




// 4..// Write a program to print mutiplication table of any number using for looop.Length & table number should be taken from user as an input
// var tableNumber = +prompt("enter table number:")
// var tablelen = +prompt("enter table length:")
// // console.log(tableNumber, "tableNumber")
// for (var i = 1; i <= 10 ; i++) {
//     document.write (tableNumber + " *" + i + "=" + tableNumber * i + "<br />" )
// }



// 5..// Write a program to print items of the following array using for loops
// var fruits = ["apple", "banana","mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 6.
// Start of the series
// var start = 1;
// // End of the series
// var end = 10;
// // Initialize an empty array
// var countingSeries = [];

// // Generate the series
// for (var i = start; i <= end; i++) {
//     countingSeries.push(i);
// }

// // Display the series in the browser
// document.write(countingSeries);

// question 7
// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/ Ma'am?").toLowerCase();
// var stock = ["cake", "apple pie", "cookie", "chips", "patties"];

// var flag = false;


// for (var i = 0; i < stock.length; i++) {

//     if (stock[i] == userInput) {
//         document.write(userInput + " is available at index " + [i] + " in our bakery");
//         flag = true;
//         break;
//     }
// }
//     if (flag === false) {
//         document.write("We are sorry." + userInput + " is not available in our bakery")
//     }



// Question No 8  Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].


// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("Array items: " + A);
// document.write("The largest number is: " + largest);



// Question No 9 Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]


// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("Array items: " + A);
// console.log("The smallest number is: " + smallest);


// Question No 10 Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}