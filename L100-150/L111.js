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
 * @return {number}
 * 左右孩子都为空的节点才是叶子节点，递归计算的时候需要注意这个点
 #
 */
var minDepth = function(root) {
    // 节点为空直接返回0
    // 递归
    if (!root) {
        return 0;
    }
    let leftDepth = minDepth(root.left); // 左节点深度
    let rightDepth = minDepth(root.right); // 右节点深度

    // 当一个左子树为空，，右子树不为空，这时并不是最低点
    if (!root.left && root.right) {
        return 1 + rightDepth;
    }
    // 当一个右子树为空，，右子树不为空，这时并不是最低点
    if (root.left && !root.right) {
        return 1 + leftDepth;
    }
    return 1 + Math.min(leftDepth, rightDepth)

    // 迭代法
    // if (!root) return 0;
    // const queue = [root];
    // let dep = 0;
    // while(true) {
    //     let size = queue.length;
    //     dep++;
    //     while (size--) {
    //         const node = queue.shift();
    //         // 到第一个叶子节点返回当前深度
    //         if (!node.left && !node.right) return dep;
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.left);
    //     }
    // }
}