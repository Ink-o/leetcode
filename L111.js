var minDepth = function(root) {
    // 节点为空直接返回0
    // if (!root) {
    //     return 0;
    // }
    // // 节点的左右子树都为0，说明这是一个叶子节点，直接返回1
    // if (!root.left && !root.right) {
    //     return 1;
    // }
    // let min_depth = Infinity;
    // // 计算左侧子树深度
    // if (root.left) {
    //     min_depth = Math.min(minDepth(root.left), min_depth);
    // }
    // // 计算右侧子树深度
    // if (root.right) {
    //     min_depth = Math.min(minDepth(root.right), min_depth);
    // }
    // // 最终返回左右子树中最小的层数
    // return min_depth + 1;

    // if (!root) return 0;
    // // 到达叶子节点，返回1
    // if (!root.left && !root.right) return 1;
    // // 只有右节点时，递归右节点
    // if (!root.left) {
    //     return 1 + minDepth(root.right);
    // }
    // // 只有左节点的时候，递归右节点
    // if (!root.right) {
    //     return 1 + minDepth(root.left);
    // }
    // return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

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