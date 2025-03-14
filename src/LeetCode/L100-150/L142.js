/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * c++版本，推荐
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // ⭐️这里的快慢指针都是针对头部走 1-2 步
  let slow = head
  let fast = head

  // 如果 fast 到底部了，那说明不成环
  while (fast && fast.next) {
    // 快指针移动2步
    // 慢指针移动1步
    slow = slow.next
    fast = fast.next.next

    // 这里的相遇是以内存地址为对比
    if (fast === slow) {
      // 慢指针回到链表头
      let i1 = head
      let i2 = fast

      // 快慢指针各自前进一步直到相等
      while (i1 !== i2) {
        i1 = i1.next
        i2 = i2.next
      }
      // 最后进行返回
      return i1
    }
  }

  // 不成环直接返回 null
  return null
}

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
var detectCycle = function (head) {
  if (!head || !head.next)
    return null
  // 慢指针先走一步，快指针走两步
  let slow = head.next
  let fast = head.next.next
  // 然后继续进行移动，快指针走一步，慢指针走两步直到快指针为空或者快指针等于慢指针
  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next
    slow = slow.next
  }
  if (!fast || !fast.next)
    return null
  slow = head // 慢指针回到头部
  // 然后快慢指针一人走一步，直到相遇
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
