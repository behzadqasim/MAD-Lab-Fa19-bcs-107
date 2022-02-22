//Problem no: 07
console.log("\nProblem no: 07")
const InputArray = [9,43,5,10];
let found = InputArray.indexOf(10);
if(found==0){
    console.log("Found at First Position.");
}
else if(found == InputArray.length - 1){
    console.log("Found at Last Position.");
}
else{
    console.log("Not Found.");
}