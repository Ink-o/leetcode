/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 使用3个点来进行替换，需要一个前置节点
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const ret = new ListNode(0, head)
  let temp = ret
  // 交换对象是两个，.next和.next.next 如果只有一个存在的话则不用再进行交换
  while (temp.next && temp.next.next) {
    // 节点2
    const cur = temp.next.next
    // 节点1
    const pre = temp.next

    // 步骤三（节点1的next连接到节点2的next）
    pre.next = cur.next
    // 步骤二（节点2的next连接到节点）
    cur.next = pre
    // 步骤一（当前节点的next连接到节点2）
    temp.next = cur

    // 指针移动到下一个未交换节点的前面，因为交换节点的对象是其之后的两个节点（这里的pre调换过后就是cur节点了）
    temp = pre
  }
  return ret.next
}
