// https://leetcode.com/problems/linked-list-cycle

var hasCycle = function(head) {
    let rabbit = head
    let tortoise = head

    while (rabbit) {
        tortoise = tortoise.next
        if (!rabbit.next) return false
        rabbit = rabbit.next.next
        if (rabbit === tortoise) return true
    }
    return false
};