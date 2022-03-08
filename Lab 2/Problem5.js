var calculate_average_and_highest = function(){
    var return_array =  new Array();
    var sum = 0;
    for(var i = 0; i<arguments.length ; i++){
        sum = sum + arguments[i];
     }
    return_array.push(sum/arguments.length);
    return_array.push(Math.max.apply(Math,arguments));
    return return_array;
     
}
var result = calculate_average_and_highest(10,10,70,60,64);
console.log("Average is : ",result[0]," and highest is: ",result[1]);
