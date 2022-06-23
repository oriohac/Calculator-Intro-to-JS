// Declare your variables to receive trimmed values from a prompt.
let num1 = prompt("Enter First Number:").trim();
let num2 = prompt("Enter Second Number:").trim();
// Make sure values received are of type Number
num1 = Number(num1);
num2 = Number(num2);
// Work on the values with an operator, then assign the values to variables.
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
// Choose the operation you want to carry out by selecting the corresponding operator.
let operation = prompt("Enter \n* For Multiplication \n+ For Addition \n- For Subtraction \n/ For Division").trim();
// Use the if else if conditional statement to show an output depending on the operation carried out.
if (operation === "+") {
    alert(num1 + " + " + num2 + " = " + add);
} else if (operation === "-") {
    alert(num1 + " - " + num2 + " = " + sub);
} else if (operation === "*") {
    alert(num1 + " x " + num2 + " = " + mul);
} else if (operation === "/") {
    alert(num1 + " / " + num2 + " = " + div);
} else {
    alert("Check Your Operator and Run Again");
}