let sandwitch_calculato = function(bread){
if(bread % 2 == 0 ){
    return bread / 2;
}
else{
    return "bread is not enough to make sandwitch";
}
}
console.log("Amount of entered bread: 10 and sandwitch mades: ",sandwitch_calculato(10));
function sandwitch_calculator(bread,cheese){
    if(bread % 2 == 0 && cheese > 1 ){
        return bread / 2;
    }
    else if(bread % 2 == 0 && cheese == 1){
        return 1;
    }
    else{
        return "bread is not enough to make sandwitch";
    }
}
console.log("Amount of entered bread: 10 and 1 cheese so sandwitch mades: ",sandwitch_calculator(10,1));
