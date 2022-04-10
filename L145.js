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
var postorderTraversal = function(root) {
    let stack = [];
    let res = [];
    // 大体先遵循 中 -> 左 -> 右顺序进栈（这样的输出是中 -> 右 ->左 ）
    // 然后对结果进行翻转，然后结果变成了 左 -> 右 -> 中
    stack.push(root); // 先进根节点
    while (stack.length) {
        let ele = stack.pop();
        res.push(ele.val);

        // 左子树先进栈
        stack.push(ele.left);
        // 右子树后进栈
        stack.push(ele.right);
    }
    return res.reverse();
};