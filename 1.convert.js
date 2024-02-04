
// ====== inch to feet conversion
function inchToFeet(inch){
    const feet = inch / 12;
    return feet; 
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

// different way 
function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 2;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

// ===== mile to kilometer converstion
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const result = mileToKilometer(5);
console.log(result);