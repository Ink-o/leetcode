var removeElements = function(head, val) {
    let node = new ListNode(-1, head);
    let cur = node;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            // 移动指针后直接执行continue，因为后面可能还有 = val的值
            continue;
        }
        // 本次没有符合的就直接指针往后移动
        cur = cur.next;
    }
    return node.next;
}