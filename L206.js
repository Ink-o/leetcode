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
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let cur = null, pre = null, tmp = null;
    while (cur) {
        // 1、保存cur的next
        tmp = cur.next;
        // 2、更新cur.next指向前一个元素
        cur.next = pre;
        // 3、更新pre为cur
        pre = cur;
        // 4、cur继续按照正常原本的next往下走
        cur = tmp;
    }
    // 返回前置指针，因为cur必定为null，此时的pre必为尾部
    return pre;
}

// 递归，处理思想与迭代一致
var reverseList = function(head) {
    const reverse = (pre, head) => {
        if (!head) {
            return pre;
        }
        // 1、保存head.next
        let tmp = head.next;
        // 2、更新head.next指向
        head.next = pre;
        // 3、更新pre
        pre = head;
        // 4、继续递归更改后续的节点
        return reverse(pre, tmp);
    }
    return reverse(null, head);
}