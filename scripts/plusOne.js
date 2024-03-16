var plusOne = function(digits) {
    let number = BigInt(digits.join(""))
    number++;
    return String(number).split("").map(Number)
}

module.exports = plusOne;
