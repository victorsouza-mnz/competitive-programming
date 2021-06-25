//https://leetcode.com/problems/kth-largest-element-in-an-array/

let array = [5,3,1,6,4,2]


const quicksort = function (array, left, right) {
    if (left < right){
        const partitionIdx = partition(array, left, right)
        quicksort(array,left,partitionIdx-1)
        quicksort(array, partitionIdx+1, right)
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
    quicksort(nums, 0, nums.length-1)
    return nums[indexToFind]
};

console.log(findKthLargest(array, 1))