// https://leetcode.com/problems/linked-list-cycle-ii/

var detectCycle = function(head) {
    let rabbit = head
    let tortoise = head

    while (true) {
        tortoise = tortoise.next
        if (!rabbit.next) return null
        rabbit = rabbit.next.next
        if (rabbit === tortoise) break
    }
    
    rabbit = head
    while (rabbit !== tortoise){
        rabbit = rabbit.next
        tortoise = tortoise.next
    }
    return tortoise
};