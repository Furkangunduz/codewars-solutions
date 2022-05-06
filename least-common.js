var lcm = function (...args) {
    var nums = args;
    nums.sort();
    let num = nums[nums.length - 1];
    A: while (true) {
        num += num;
        for (item of nums) {
            if (item / num != Math.floor(item / num)) break;
            break A;
        }
    }
    return num;
};

console.log(lcm(2, 7, 3, 4, 5));
