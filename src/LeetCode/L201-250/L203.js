// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const dumpHead = new ListNode('', head) // 虚拟头结点
  let pre = dumpHead
  let cur = dumpHead.next // 初始化直接为 头结点

  while (cur) {
    if (cur.val === val) {
      // 当遇到需要删除节点
      // 直接将前置节点指向 当前节点的 next 节点
      // 要删除节点时，pre 节点无需进行更新
      // 注意：这个时候的 cur 是没指向 cur.next 的
      pre.next = cur.next
    }
    else {
      // 如果没有遇到需要删除的节点，则更新 pre 节点为 cur 节点
      pre = cur
    }
    // 更新当前 cur 节点，往后移动
    cur = cur.next
  }
  return dumpHead.next
}
