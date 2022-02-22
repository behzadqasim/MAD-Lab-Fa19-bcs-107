//Problem no: 02
console.log("\nProblem no: 02");
var input_number = 23617;
var inputNumber_Array = String(input_number).split("").map((input_number)=>{
    return Number(input_number)
  });
var NumbersInArraySum = inputNumber_Array.reduce(function(a,b){return a+b;},0);
console.log("Input Number is: "+input_number);
console.log("Sum of Array: "+NumbersInArraySum);