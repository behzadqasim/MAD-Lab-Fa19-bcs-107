//Problem no: 03
console.log("\nProblem no: 03");
var input_number = 23617;
var inputNumber_Array = String(input_number).split("").map((input_number)=>{
    return Number(input_number)
  });
var evenNumbersInArray = inputNumber_Array.filter(Number => Number % 2 == 0);
var evenNumbersInArraySum = evenNumbersInArray.reduce(function(a,b){return a+b;},0);
console.log("Input Number is: "+input_number);
console.log("Even Number Sum: "+evenNumbersInArraySum);