let swapPairs = function (head) {
    let ret = new ListNode(0, head);
    let temp = ret;
    // 交换对象是两个，.next和.next.next 如果只有一个存在的话则不再进行循环
    while (temp.next && temp.next.next) {
        // 节点2
        let cur = temp.next.next;
        // 节点1
        let pre = temp.next;

        // 步骤三（节点1的next连接到节点2的next）
        pre.next = cur.next;
        // 步骤二（节点2的next连接到节点）
        cur.next = pre;
        // 步骤一（当前节点的next连接到节点2）
        temp.next = cur;
        
        // 指针移动
        temp = pre;
    }
    return ret.next;
}