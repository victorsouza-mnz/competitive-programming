//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

let array = [1,2,4,4,4,4,5,6,7,8,9]

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


var searchRange = function(nums, target) {
    let result = binarysearch(nums, target)
    let left = result
    let right = result 
    if (result === -1) return [-1,-1]
    while (nums[left] === nums[result]){
        left--
    }
    while (nums[right] === nums[result]){
        right++
    }

    return [left+1, right-1]
};

console.log(searchRange([5,7,7,8,8,10], 6))
