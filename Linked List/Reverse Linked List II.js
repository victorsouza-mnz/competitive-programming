//https://leetcode.com/problems/reverse-linked-list-ii/

const reverseBtween = (head, m, n) => {
    let currPOS= 1
    let currNODE = head
    let start = head
    while (currPOS < m) {
        start = currNODE
        currNODE = currNODE.next
        currPOS++
    }
    let newList = null 
    let tail = currNODE
    while (currPOS >= m && currPOS <= n) {
        const next = currNODE.next
        currNODE.next = newList
        newList = currNODE 
        currNODE = next
        currPOS++
    }
    start.next = newList
    tail.next = currNODE
    
    if (m>1) return head
    return newList
}