/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 入栈顺序：左 -> 右
// 出栈：左 -> 中 -> 右
var inorderTraversal = function(root) {
    const stack = [];
    let cur = root;
    let res = [];
    while (stack.length || cur) {
        // 先把所有的左节点全部进栈(第一次进入循环体是先把根节点放进去)
        if (cur) {
            stack.push(cur);
            // 左
            cur = cur.left;
        } else {
            // 首先是最底层的左节点优先出栈，cur赋值为当前出栈的节点
            cur = stack.pop();
            res.push(cur.val);
            // 出完栈后再对右节点进行处理
            cur = cur.right;
        }
    }
    return res;
};