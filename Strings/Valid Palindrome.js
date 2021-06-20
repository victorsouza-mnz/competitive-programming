//https://leetcode.com/problems/valid-palindrome/


const func = (s) => {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    if (s.length <= 1) return true

    let left = 0
    let right = s.length - 1

    while (right > left) {
        console.log(right, left)
        if (s[right] !== s[left]) return false
        right--
        left++
    }
    return true
}
