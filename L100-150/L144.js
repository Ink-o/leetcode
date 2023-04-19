/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let ret = [];
    // 栈先加入根节点
    let stack = [root];
    while (stack.length) {
        let ele = stack.pop();
        ret.push(ele);
        // 先进栈右节点
        ele.right && stack.push(ele.right);
        // 再进栈左节点
        ele.left && stack.push(ele.left);
    }
    return ret;
};
