// // Assignment in javaScript
// // Uzain ALI 
// // First Chapter in Alert

// alert(" Error ! Please Enter  a valid Password.")
// alert("Wellcome to JS Land... \n Happy Coding!")
// alert("Wellcome to JS Land...")
// alert(" Happy Coding ! \n Prevent this page for Creating additional dialogs..")
// alert (" Hello ... I can run JS through my web browser's console ")
// console.log(alert)

// // Second Chapter variable string 
// var firstName = "Uzain Ali "
// alert(firstName)
// var age = "20 years old";
// alert(age)
// var certiFied = " Certified Mobile Application Development"
// alert(certiFied)
// var lastName = " Pizza \n Pizz \n Piz \n Pi \n P"
// alert(lastName)
// var email = " My Email address is example uzainali15@gmail.com"
// alert(email)



// // third Chapter Variable Num
// var age = "20";
// alert("I am " + age + " year old");
// var vsitNumber = "07";
// alert("You have visited this site " + vsitNumber + " times");
// var birthYear;
// birthYear = "2003";
// document.write("My birth year is " + birthYear + ".\n");
// var userName = prompt("Enter your name");
// var product = prompt("Enter product title");
// var quantity = prompt("How many products you want to order");
// document.write(" " + userName + " ordered " + quantity + " " + product + "Shah Garments ")


// // Fourth CHAPTER
// // declaring 3 variables in one statement
// var x = 5, y = 10, z = "Hello";

// // 5 legal variable names in JS

// var name, _name, $name, name_variable, name$;

// // 5 illegal variable names in JS

// // var @name, 34Product, user@Name, Pakistan@1947, #JavaScript#; 


// // Select the heading element
// let headingElement = document.getElementById("heading");

// // Set the text content of the heading
// headingElement.textContent = "Rules for naming JS variables";

// document.write("Variable names can only contain, number, $,_." + " For example $my_1stVariable <br/>");
// document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name <br/>");
// document.write("Variable names are case sensitive <br/>");
// document.write("Variable names should not be JS keywords");



// // chapter 5 

// // adding two numbers

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var sum_result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum_result);

// // subtracting first number from second number

// var sub_result = num1 - num2;
// document.write("<br/> Sub of " + num1 + " and " + num2 + " is " + sub_result);

// // multiplication of first number to second number

// var mul_result = num1 * num2;
// document.write("<br/> Multiplication of " + num1 + " and " + num2 + " is " + mul_result);

// // division of first number to second number

// var div_result = num1 / num2;
// document.write("<br/> Division of " + num1 + " and " + num2 + " is " + div_result);

// // modulus of first number to second number

// var mod_result = num1 % num2;
// document.write("<br/> Modulus of " + num1 + " and " + num2 + " is " + mod_result);

// // a). Declare a variable
// var variable1;

// // b). Show the value of variable in your browser like “Value after variable declaration is: ??

// document.write("<br/><br/><br/> Value after variable declaration is ??");

// // C).Initialize the variable with some number.
// variable1 = 10;


// // f). Show the value of variable in your browser like “Initial value: 5”

// document.write("<br/> Initial value : " + variable1);

// // Increment the variable

// document.write("<br/> Value after increment is : " + ++variable1);


// // Add 7 to the variable.

// var add_result = 7 + variable1;

// // Show the value of variable in your browser like “Value after addition is: 13”

// document.write("<br/> Value after addition is : " + add_result);


// // Decrement the variable

// document.write("<br/> Value after decrement is : " + --add_result);

// // Show the remainder after dividing the variable’s value by 3.

// var remainder_result = variable1 % 3;
// document.write("<br/> The remainder is : " + remainder_result);


// // Question 4 

// var movieTicket_price = '600';
// var price_Ticket = 5 * movieTicket_price;
// document.write("<br/><br/>The cost to buy 5 tickets to a movie is " + price_5Ticket + "PKR <br/><br/>");

// // Question  5

// var tableDigit = +prompt("<br/><br/>Enter digit of your choice to run a table:");
// tableDigit = 1 * tableDigit;





// //   Question 6

// var temp_Celsius = +prompt("Enter temp in celsius:");
// var temp_Fahrenheit = +prompt("Enter temp in fahrenheit:");
// Fahrenheit = (temp_Celsius * 9 / 5) + 32;
// document.write(temp_Celsius + " C is " + Fahrenheit + " F <br/><br/>");
// Celsius = (temp_Fahrenheit - 32) * 5 / 9;
// document.write(temp_Fahrenheit + " F is " + Celsius + " C <br/><br/>");


// // Question 7


// var item1 = +prompt("Enter price of item 1:");
// var item2 = +prompt("Enter price of item 2:");
// var item1Qty = +prompt("Enter order quantity of item 1");
// var item2Qty = +prompt("Enter order quantity of item 2");
// var shippingCharges = +prompt("Enter shipping charges:");
// var costResult = item1 * item1Qty + item2 * item2Qty + shippingCharges;
// document.write("<br/>Price of item 1 is : " + item1);
// document.write("<br/>Quantity of item 1 is : " + item1Qty);
// document.write("<br/>Price of item 2 is : " + item2);
// document.write("<br/>Quantity of item 2 is : " + item2Qty);
// document.write("<br/>Shipping charges : " + shippingCharges);
// document.write("<br/><br/>Total cost of your order is : " + costResult);


// // Question  8 (Mark sheet)


// var totalMarks = +prompt("Enter total marks : ");
// var obtainMarks = +prompt("Enter obtained marks : ");
// var percentage = obtainMarks * 100 / totalMarks;
// document.write("<br/>Total marks : " + totalMarks);
// document.write("<br/>Obtained marks : " + obtainMarks);
// document.write("<br/><br/>Percentage : " + percentage);


// // // Question  9 (Currency in PKR)


// var dollar = 10, riyal = 25;
// var xchange_to_PKR = dollar * 104.80 + riyal * 28;
// document.write("<br/>Total currency in PKR : " + xchange_to_PKR);



// // Question  10 (Arithematic calculation on stored number)

// var number = +prompt("Enter your number : ");
// var calculation = ((number + 5) * 10) / 2;
// document.write("<br/>After arithematic calculation your number is : " + calculation);




// // Question 11 (The age calculator)


// var currentYear = 2024;
// var birthYear = +prompt("Enter your birth year : ");
// var age1 = currentYear - birthYear;
// var age2 = currentYear - birthYear - 1;
// document.write("Current year is : " + currentYear);
// document.write("<br/>Birth year is : " + birthYear);
// document.write("<br/>They are either " + age1 + " or " + age2 + " years old.");



// // Question  12 (The Geometrizer)

// var rad = +prompt("Enter radius of circle : ");
// var circum = 2 * 3.142 * rad;
// var area = 3.142 * (rad * rad);
// document.write("<br/>Radius of circle is : " + rad);
// document.write("<br/>The circumference of circle is : " + circum);
// document.write("<br/>The area of circle is : " + area);


// // Question  13 (The life time supply calculator)


// var favSnack = prompt("Enter your favorite snack : ");
// var currentAge = +prompt("Enter your current age : ");
// var maxAge = +prompt("Enter maximum age : ");
// var estAmount = +prompt("Enter estimated amount per day : ");
// var result = (maxAge - currentAge) * estAmount;
// document.write("<br/>Favorite snack is : " + favSnack);
// document.write("<br/>Current age is : " + currentAge);
// document.write("<br/>Maximum age is : " + maxAge);
// document.write("<br/>Amount of snacks per day : " + estAmount);
// document.write("<br/><br/>You will need " + result + " " + favSnack + " to last you until the ripe old age of " + maxAge);




// // CHAPTER # 6-9

// // Question No 1

// var num1 = +prompt("Enter your number : ");
// document.write("<br/>The value of a is : " + num1);
// var result1 = 1 + num1;
// document.write("<br/><br/>The value of ++a is : " + result1);
// document.write("<br/>Now the value of a is : " + result1);
// var result2 = result1 + 1;
// document.write("<br/>The value of a++ is : " + result1);
// document.write("<br/>Now the value of a is : " + result2);
// var result3 = result2 - 1;
// document.write("<br/>The value of --a is : " + result3);
// document.write("<br/>Now the value of a is : " + result3);
// var result4 = result3 - 1;
// document.write("<br/>The value of a-- is : " + result3);
// document.write("<br/>Now the value of a is : " + result4);


// // Question No 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br/>The value of a: " + a + "<br/> The value of b: " + b);
// document.write("<br/>The output result to a and b is : " + result);
// var result1 = a - 1, result2 = b - 1;
// document.write("<br/>The value of a afer --a is : " + result1);
// var result3 = result1 - result2;
// document.write("<br/>The value afer --a - --b is : " + result3);
// var result4 = result3 + 1 + b;
// document.write("<br/>The value afer --a - --b + ++b is : " + result4);
// var result5 = result4 + b;
// document.write("<br/>The value afer --a - --b + ++b + b-- is : " + result5);


// // Question No 3


// var userName= prompt("Enter your name : ");
// document.write("Welcome! " + userName + " to JavaScript")


// // Question No 4 (No question)

// // Question No 5 (Multiplication of table) (cannot program at beginner stage)

// // Question No 6 (cannot make a table in JS at beginner stage )

// var sub1 = prompt("Enter first subject name : ");
// var sub2 = prompt("Enter second subject name : ");
// var sub3 = prompt("Enter third subject name : ");
// var sub1Totalmarks, sub2Totalmarks, sub3Totalmarks = 100;
// var sub1Obtainmarks = +prompt("Enter subject 1 obtained marks :");
// var sub2Obtainmarks = +prompt("Enter subject 2 obtained marks :");
// var sub3Obtainmarks = +prompt("Enter subject 3 obtained marks :");
// var totalMarks_obtained = sub1Obtainmarks + sub2Obtainmarks + sub3Obtainmarks;
// var percentage = totalMarks_obtained * 100 / 300;
// document.write("<br/><br/>" + sub1 + " marks is " + sub1Obtainmarks);
// document.write("<br/>" + sub2 + " marks is " + sub2Obtainmarks);
// document.write("<br/>" + sub3 + " marks is " + sub3Obtainmarks);
// document.write("<br/><br/>Total Marks Obtained is : " + totalMarks_obtained);
// document.write("<br/>Percentage is : " + percentage);
















// // CHAPTER 9-11
// // Question No 1

// var cityName = prompt("Enter your city name:");
// if (cityName === "Karachi") {
//     alert("Welcome to city of lights");
// }


// // Question No 2

// var gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// }
// if (gender === "female") {
//     alert("Good Morning Ma'am.");
// }


// // Question No 3

// var signalColor = prompt("Enter Traffic Signal Color:");
// if (signalColor === "red") {
//     alert("Must stop");
// }
// if (signalColor === "yellow") {
//     alert("Ready to move");
// }
// if (signalColor === "green") {
//     alert("Move now");
// }


// // Question No 4

// var fuelQty = +prompt("Enter quantity of fuel (ltr) remaining in your car:");
// if (fuelQty <= "0.25") {
//     alert("Please refill the fuel in your car.");
// }


// // Question No 5


// // a. (alert message output displayed)

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // b. (alert message output not displayed)

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }


// // c. (alert message output condition 2 and 4 is true)

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // d. (alert message output displayed as "The cost equal")

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }


// // e. (alert message output displayed as "true")

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }


// // f. (alert message output displayed as "car is smaller than cat")

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// // Question No 6


// var totalMarks = +prompt("Enter total marks:");
// var obtainedMarks = +prompt("Enter marks obtained:");
// var percentage = obtainedMarks * 100 / totalMarks;
// document.write("Total Marks: " + totalMarks);
// document.write("<br/>Marks obtained: " + obtainedMarks);
// document.write("<br/>Percentage: " + percentage);

// if (percentage >= 80) {
//     document.write("<br/>Grade : A-One");
//     document.write("<br/>Remarks : Excellent");
// }

// if (percentage >= 70)
// if (percentage < 80) {
//     document.write("<br/>Grade : A");
//     document.write("<br/>Remarks : Good");
// }

// if (percentage >= 60)
// if (percentage < 70) {
//     document.write("<br/>Grade : B");
//     document.write("<br/>Remarks : You need to improve");
// }

// if (percentage < 60) {
//     document.write("<br/>Grade : Fail");
//     document.write("<br/>Remarks : Sorry");
// }


// // Question No 7

// var numbers = [];
// for (var i = 1; i <= 10; i++) {
//     numbers.push(i);
// }
// var num = +prompt("Enter a number to guess secret number ranging from 1 to 10:");

// // var secretNum = 1;
// // var secretNum = 1; secretNum <= 10; secretNum++;
// // console.log(secretNum);

// if (num = numbers) {
//     document.write("Bingo! Correct answer");
//     // document.write("<br/>Bingo! Correct answer”);
// }

// // Question No 8 (pending)

// // Question No 9 (incomplete)

// var num = +prompt("Enter a number:");
// if (num % 2 === 0); {

//     document.write("Even number")
// }
// if (num % 2 === 1); {

//     document.write("Odd number")
// }


// // Question No 10


// var temp = +prompt("Enter a temperature:");
// if (temp > 40) {
//     document.write("<br/>It is too hot outside.");
// }

// if (temp > 30)
//     if (temp < 40) {
//         document.write("<br/>The Weather today is Normal.");
//     }

// if (temp > 20)
//     if (temp < 30) {
//         document.write("<br/>Today Weather is cool.");
//     }

// if (temp > 10)
//     if (temp < 20) {
//         document.write("<br/>“OMG! Today weather is so Cool.”");
//     }


// // Question No 11

// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operationSymbol = prompt("Enter symbol for arithematic operation:");

// if (operationSymbol == "+") {
//     var result = num1 + num2;
//     document.write(num1 + " + " + num2 + " = " + result)
// }

// if (operationSymbol == "-") {
//     var result = num1 - num2;
//     document.write(num1 + " - " + num2 + " = " + result)
// }

// if (operationSymbol == "*") {
//     var result = num1 * num2;
//     document.write(num1 + " * " + num2 + " = " + result)
// }

// if (operationSymbol == "/") {
//     var result = num1 / num2;
//     document.write(num1 + " / " + num2 + " = " + result)
// }

// if (operationSymbol == "%") {
//     var result = num1 % num2;
//     document.write(num1 + " % " + num2 + " = " + result)
// }







