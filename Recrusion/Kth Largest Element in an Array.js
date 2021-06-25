//https://leetcode.com/problems/kth-largest-element-in-an-array/


let array = [5,3,1,6,4,2]


const quickSelect = function (array, left, right, indexToFind) {
    if (left < right){
        const partitionIdx = partition(array, left, right)
        if (partitionIdx === indexToFind) {
            return array[partitionIdx]
        } else if (indexToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx-1, indexToFind)
        } else {
            return quickSelect(array, partitionIdx+1, right, indexToFind)
        }
    }
}


const partition = function (array,left,right) {
    const pivotElement = array[right]
    let partitionIdx = left
    for (let j = left; j<right; j++) {
        if(array[j] < pivotElement) {
            swap(array, partitionIdx, j)
            partitionIdx++
        }
    }
    swap(array, partitionIdx, right)
    return partitionIdx
}


const swap = function (array, i, j ){ 
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}


var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k
    quickSelect(nums, 0, nums.length-1, indexToFind)
    return nums[indexToFind]
};

console.log(findKthLargest(array, 1))