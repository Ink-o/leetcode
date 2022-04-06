/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    // 慢指针先走一步，快指针走两步
    let slow = head.next, fast = head.next.next;
    // 然后继续进行移动，快指针走一步，慢指针走两步直到快指针为空或者快指针等于慢指针
    while (fast && fast.next && fast !== slow) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (!fast || !fast.next) return null;
    slow = head; // 慢指针回到头部
    // 然后快慢指针一人走一步，直到相遇
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}