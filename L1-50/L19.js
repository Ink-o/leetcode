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
function removeNthFromEnd(head, n) {
  const dumpHead = new ListNode('', head)
  // 这里先以 dumpHead 开头，下面实际的行走n步就是走到第n格
  let fast = slow = dumpHead

  // fast 前进 n 步
  while (n--) {
    fast = fast.next
  }
  // ⭐️直到 fast 到最后一个节点（注意这里是 fast.next，就是要走到最后一个元素）不需要越界
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return dumpHead.next
}
