/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  // 保存新的链表头
  const dumpHead = new ListNode()
  let node = dumpHead
  // 保存进位
  let num = 0
  while (l1 || l2) {
    // 当链表已经不存在的时候，默认赋值为 0
    const l1Val = l1 ? l1.val : 0
    const l2Val = l2 ? l2.val : 0
    // 当前节点的数值需要加上进位
    const sum = l1Val + l2Val + num
    // 超过 10 的需要手动保存 十位 数字
    node.val = sum % 10
    // 保存进位，给下一个计算使用
    num = sum >= 10 ? 1 : 0

    // 链表继续移动
    if (l1)
      l1 = l1.next
    if (l2)
      l2 = l2.next

    // 当 2 条链表还存在的时候才需要添加 next
    if (l1 || l2) {
      node.next = new ListNode()
      node = node.next
    }
  }
  // 如果最后的进位不为 0 的话，这里需要手动再添加上
  if (num !== 0) {
    node.next = new ListNode(num)
  }
  return dumpHead
}
