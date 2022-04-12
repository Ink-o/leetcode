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
 * 思路，直接
 */
var findBottomLeftValue = function(root) {
    let queue = [root];
    let firstNodeVal = '';
    let res = [];
    while (queue.length) {
        let curLevel = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (i === 0) {
                firstNodeVal = cur.val;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(curLevel);
    }
    return firstNodeVal;
};