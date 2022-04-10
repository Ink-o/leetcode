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
 * @return {boolean}
 * 迭代方法判断是否是对称二叉树
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    let queue = [];
    // 一次性进入左右孩子
    queue.push(root.left);
    queue.push(root.right);
    
    while (queue.length) {
        let leftNode = queue.shift(); // 左孩子出队
        let rightNode = queue.shift(); // 右孩子出队
        if (!leftNode && !rightNode) {
            continue;
        }
        // 左右节点有一个为null，或者两者的值不相等时，直接返回false
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }

        // 左节点的左孩子和右孩子的右孩子入队（对称对比）
        queue.push(leftNode.left);
        queue.push(rightNode.right);

        // 左节点的右孩子和右孩子的左孩子入队（对称对比）
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 * 递归方法判断是否是对称二叉树
 */
var isSymmetric2 = function(root) {
    // 三部曲
    // 1、确认传参。left：左节点。right：右节点
    const compareNode = (left, right) => {
        // 2、确认终止条件，空的条件
        if (!left && right || left && !right) {
            return false;
        } else if (!left && !right) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }

        // 3、确认单层递归逻辑
        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);
        return outSide && inSide;
    }
    if (!root) {
        return true;
    }
    // 对比左右节点
    return compareNode(root.left, root.right);
};