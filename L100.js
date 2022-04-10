/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 使用层序遍历，让两棵树的左右节点分别进行对比
 */
 var isSameTree = function(p, q) {
    let queue = [];
    // 两棵树进队
    queue.push(p);
    queue.push(q);
    while (queue.length) {
        // 出队
        let leftTree = queue.shift();
        let rightTree = queue.shift();

        // 两者都为空则继续进行循环
        if (!leftTree && !rightTree) {
            continue;
        }
        // 两棵树有一棵为空，则返回false
        if (!leftTree || !rightTree) {
            return false;
        }
        // 两棵树的实际值不相等，则返回false
        if (leftTree.val !== rightTree.val) {
            return false;
        }
        // 依次添加需要对比的树
        queue.push(leftTree.left);
        queue.push(rightTree.left);
        queue.push(leftTree.right);
        queue.push(rightTree.right);
    }
    return true;
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 使用层序遍历，让两棵树的左右节点分别进行对比
 */
 var isSameTree = function(p, q) {
    return compareNode(p, q);

    function compareNode(left, right) {
        if (!left && right || !right && left) {
            return false;
        } else if (!left && !right) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        let leftSide = compareNode(left.left, right.left);
        let rightSide = compareNode(left.right, right.right);
        return leftSide && rightSide;
    }

};