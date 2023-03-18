// DEFINE YOUR FUNCTION BELOW:
function returnDay(numDay){
    const weekDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    if(numDay >= 1 && numDay <= 7){
        return weekDay[numDay-1];
    }
    return null;
}
