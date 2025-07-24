function myFunc() {
  document.getElementById("demo").innerHTML =
    "This test is from script.js file";
}

function myFunc1() {
  const number1 = 10;
  const number2 = 20;
  const sum = number1 + number2;
  //document.writeln(sum)
  //alert(sum)
  document.getElementById("demo").innerHTML =
    "this sum is from myFunc1. sum = " + sum;
}
