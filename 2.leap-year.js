
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isLeapYear(2016);
console.log(result);

/***
 * Leap Year Concept:
 * Those years are not divisible by 100, but divisible by 4: called leap year 
 * Those years are divisible both 100 and 400 : called leap year
*/
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isLeapYear(2100);
console.log(result);