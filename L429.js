/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * 层级遍历，需要对node.children进行遍历添加元素进队列中
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let ret = [];
    while (queue.length) {
        let len = queue.length;
        let curLevel = [];
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            node.children.forEach(item => {
                queue.push(item);
            })
        }
        ret.push(curLevel);
    }
    return ret;
};