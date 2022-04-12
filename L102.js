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
 */
var levelOrder = function(root) {
    let ret = [];
    let queue = [];
    queue.push(root);
    if (!root) {
        return ret;
    }
    ret.push([root.val]);
    while (queue.length) {
        // 记录当前层级节点数（for循环的时候不可以直接用queue.length进行循环，因为queue.length是动态变化的）
        let length = queue.length;
        // 存放每一层的节点
        let curLevel = [];

        // 单独处理这一层的
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);

            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.left);
        }

        // 把一层的结果放到结果数组中
        res.push(curLevel);
    }
    return ret;
};