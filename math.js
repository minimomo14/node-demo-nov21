function addTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
function addThreeNumbers(numOne,numTwo,numThree){
    return numOne,numTwo, numThree;
}
addTwoNumbers(2,3);

console.log(addTwoNumbers(2,3));

let total =2;


//module.exports = addTwoNumbers;
module.exports.addTwoNumbers = addTwoNumbers;
module.exports.addThreeNumbers = addThreeNumbers;

module.exports = {
    addTwoNumbers: addTwoNumbers,
    addThreeNumbers: addThreeNumbers,
    total: total,
}