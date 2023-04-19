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
 * @return {number[][]}
 * 思路：层次遍历，然后unshift进结果数组
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let ret = [];
    while (queue.length) {
        let curLevel = [];
        let len = queue.length;
        while (len--) {
            const node = queue.shift();
            curLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        ret.unshift(curLevel);
    }
    return ret;
};