/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代
 */
var reverseList = function (head) {
  // 上一个节点置为空
  let pre = null

  // heade 作为当前指针，不能以 head.next 作为判断条件，否则链表最后一项无法连接
  while (head) {
    // 保存下一个节点
    const next = head.next
    // 操作当前节点指向上一个节点
    head.next = pre

    // 指针移动
    pre = head
    head = next
  }

  // head 经过上面循环，已经为null了，所以这里的 pre 才是链表最后
  return pre
}

// 递归，处理思想与迭代一致
var reverseList = function (head) {
  // 每次都只操作当前节点，并在每次递归过程中更新 pre 和 head
  const reverse = (pre, head) => {
    if (!head) {
      return pre
    }
    // 1、保存head.next
    const tmp = head.next
    // 2、更新head.next指向
    head.next = pre
    // 3、更新pre
    pre = head
    // 4、继续递归更改后续的节点
    return reverse(pre, tmp)
  }
  return reverse(null, head)
}
