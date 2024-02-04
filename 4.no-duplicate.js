
/***
 * remove duplicate elements of string array
 */

const biranySeeker = ['tanvir', 'alamin', 'tanvir', 'alif', 'jayeed', 'ashraful', 'jayeed', 'alamin'];

function no_duplicate(n){
    let uniqName = [];
    for(const iterator of n){
        if(uniqName.includes(iterator) === false){
            uniqName.push(iterator);
        }
    }
    return uniqName;
}
const uniqArray = no_duplicate(biranySeeker);
console.log(biranySeeker);
console.log(uniqArray);

/***
 * remove duplicate elements of number array
 */
const numbers = [11, 12, 13, 14, 15, 12, 15, 11, 14];

function no_duplicate(n){
    let uniqNumber = [];
    for(const iterator of n){
        if(uniqNumber.includes(iterator) === false){
            uniqNumber.push(iterator);
        }
    }
    return uniqNumber;
}
const uniqArray = no_duplicate(numbers);
console.log(numbers);
console.log(uniqArray);