
/***
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */
const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function odd_average(e){
    let sum = 0;
    let iteratorLength = 0;
    for(const iterator of e){
        if(iterator % 2 !== 0){
            sum = sum + iterator;
            iteratorLength = iteratorLength + 1;
        }
    }
    let makeAgerage = sum / iteratorLength;
    return makeAgerage;
}
const result = odd_average(numbers);
console.log(result);