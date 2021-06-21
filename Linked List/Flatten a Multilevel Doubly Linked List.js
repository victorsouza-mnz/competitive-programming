//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

const flatten = (head)=> {
    if (!head) return head

    let currnode = head
    while (currnode !== null) {
        if (currnode.child === null ) {
            currnode = currnode.next
        } else {
            let tail = currnode.child
            while (tail.next !== null) {
                tail = tail.next
            }
            tail.next = currnode.next
            if (currnode.next !== null ) {
                currnode.next.prev = tail
            }
            currnode.child.prev = currnode
            currnode.next = currnode.child
            currnode.child = null
        } 
    }
    return head
}