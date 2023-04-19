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
 * 思路：树形dp，列举所有的情况进行一一比对，最后得出结果。这里使用了一个数组来保存了偷与不偷的结果
 */
var rob = function(root) {
    // 后序遍历函数
    const postOrder = node => {
        // 递归出口
        if (!node) return [0, 0];

        // 使用后序遍历

        // 遍历左子树
        const left = postOrder(node.left);
        // 遍历右子树
        const right = postOrder(node.right);

        // 不偷当前节点，左右节点都可以偷或者不偷，取它们的最大值相加
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        // 偷当前节点，左右节点只能不偷
        const Do = node.val + left[0] + right[0];
        // [不偷， 偷]
        return [DoNot, Do];
    }
    const res = postOrder(root);
    // 返回最大值
    return Math.max(...res);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 思路：暴力枚举，记忆化搜索，与动态规划相比就是没有记录其偷与不偷的状态
 */
 var rob = function(root) {
    let memo = new Map();
    return robAction(root, memo);
    function robAction(root, memo) {
        if (!root) {
            return 0;
        }
        if (memo.get(root)) {
            return memo.get(root);
        }
        
        let money = root.val;

        // 表示偷当前节点的操作，这种操作需要对其左/右节点的子节点值进行操作
        if (root.left) {
            money += robAction(root.left.left, memo) + robAction(root.left.right, memo);
        }
        if (root.right) {
            money += robAction(root.right.left, memo) + robAction(root.right.right, memo);
        }
        // 比较偷与不偷的最大值，（不偷当前节点的话需要对左右节点的子节点值进行相加）
        let res = Math.max(money, robAction(root.left, memo) + robAction(root.right, memo));
        memo.set(root, res);

        return res;
    }
};