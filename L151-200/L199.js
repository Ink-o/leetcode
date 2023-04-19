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
 * 思路：层序遍历，取每一层最右边的节点
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let ret = [];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            // 当遍历到最后一个节点的时候，将数值push进去
            if (i === len - 1) {
                ret.push(node.val);
            }
        }
    }
    return ret;
};