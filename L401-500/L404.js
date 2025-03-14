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
 * 传递是否为左节点属性参数
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0
  process(root, false)
  return sum
  function process(root, isLeft) {
    if (!root) {
      return
    }
    // 判断是否是叶子节点，如果是叶子节点且属于左节点，则计算总和
    if (isLeft && !root.left && !root.right) {
      sum += root.val
    }
    process(root.left, true)
    process(root.right, false)
  }
}

// 根据上下层来进行判断
// 后序遍历处理
var sumOfLeftLeaves = function (root) {
  const nodesSum = function (node) {
    if (!node) {
      return 0
    }
    // 处理左节点中的左节点的值
    const leftValue = nodesSum(node.left)
    // 处理右节点中的左节点的值
    const rightValue = nodesSum(node.right)

    // 单层递归逻辑
    let midValue = 0
    // 判断是否是叶子节点
    if (node.left && !node.left.left && !node.left.right) {
      // 满足条件时直接取左节点的实际值
      midValue = node.left.val
    }
    // 统计
    const sum = leftValue + rightValue + midValue
    return sum
  }
  return nodesSum(root)
}
