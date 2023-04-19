/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummpyHead = new ListNode(0, head);
    let fast = dummpyHead;
    let slow = dummpyHead;
    // fast指针先往前走n步
    while(fast && n--) {
        fast = fast.next;
    }
    fast = fast.next; // fast指针需要再走一步，因为需要slow指向被删除节点的前一个节点
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow) {
        slow.next.next = slow.next;
    }
    return dummpyHead.next;
}