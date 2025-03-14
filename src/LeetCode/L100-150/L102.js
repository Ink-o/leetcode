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
function levelOrder(root) {
  const ret = []
  const queue = []
  queue.push(root)
  if (!root) {
    return ret
  }
  while (queue.length) {
    // 记录当前层级节点数（for循环的时候不可以直接用queue.length进行循环，因为queue.length是动态变化的）
    const length = queue.length
    // 存放每一层的节点
    const curLevel = []

    // 单独处理这一层的
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (!node)
        continue
      curLevel.push(node.val)

      // 存放当前层下一层的节点
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    // 把一层的结果放到结果数组中
    ret.push(curLevel)
  }
  return ret
}
