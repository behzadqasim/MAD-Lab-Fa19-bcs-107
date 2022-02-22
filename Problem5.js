search_vowel_left_most = function(inputword){
var vowels = /(A|E|I|O|U|a|e|i|o|u)/;
var leftmostposition =inputword.search(vowels);
return leftmostposition+1;
}
reverse_the_number = function(input_number){
     var inputNumber_Array = String(input_number).split("").map((input_number)=>{
    return Number(input_number)
  })
  for (let index = inputNumber_Array.length-1; index >= 0; index--){
        console.log(inputNumber_Array[index]);
}
    }
let word = "Behzad";
console.log("Left Most Position is: "+search_vowel_left_most(word));
reverse_the_number(12345);