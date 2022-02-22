const input_number = 23617;
var inputNumber_Array = String(input_number).split("").map((input_number)=>{
    return Number(input_number)
  })
let kthValue = 4;
let i = 1;
for (let index = inputNumber_Array.length-1; index >= 0; index--){
    
    if(i==kthValue){
        console.log("Value is: "+inputNumber_Array[index]);
    }
    i++;
}