var binarysearch = function(nums, target) {
    let left = 0, right = nums.length-1
    while ( left <= right ) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
};
