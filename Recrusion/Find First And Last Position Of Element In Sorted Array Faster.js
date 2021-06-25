//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var binarysearch = function(nums, left, right, target) {
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


const searchRange = function (nums, target ) {
    if (nums.length === 0) return [-1,-1]
    const firstPos = binarysearch(nums,0, nums.length-1, target)
    if (firstPos === -1 ) return [-1,-1]
    let startPos = firstPos, endPos = firstPos, temp1,temp2
    while (startPos !== -1) {
        temp1 = startPos
        startPos = binarysearch(nums, 0, startPos-1, target)
    }
    startPos = temp1
    while (endPos !== -1 ) {
        temp2 = endPos
        endPos = binarysearch(nums, endPos+1, nums.length-1, target)
    }
    endPos = temp2

    return [startPos,endPos]
}