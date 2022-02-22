//Problem no: 06
console.log("\nProblem no: 06");
const genratedRandomNumber = Math.floor(Math.random() * 10);
const guessnumber = prompt("Guess the Number: ");
if(guessnumber==genratedRandomNumber){
    alert(`You Win.`);
}
else{
    alert(`Not Matched.`);
}