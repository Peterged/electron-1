var removeDuplicates = function(nums) {
    let unique = nums.reduce((acc, curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
    return unique;
};

module.exports = removeDuplicates;