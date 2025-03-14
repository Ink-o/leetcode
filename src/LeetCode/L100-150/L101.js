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
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  const queue = []
  // 一次性进入左右孩子
  queue.push(root.left)
  queue.push(root.right)

  while (queue.length) {
    const leftNode = queue.shift() // 左孩子出队
    const rightNode = queue.shift() // 右孩子出队
    if (!leftNode && !rightNode) {
      continue
    }
    // 左右节点有一个为null，或者两者的值不相等时，直接返回false
    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false
    }

    // 左节点的左孩子和右孩子的右孩子入队（对称对比）
    queue.push(leftNode.left)
    queue.push(rightNode.right)

    // 左节点的右孩子和右孩子的左孩子入队（对称对比）
    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }
  return true
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 递归方法判断是否是对称二叉树
 */
function isSymmetric2(root) {
  // 三部曲
  // 1、确认传参。left：左节点。right：右节点
  const compareNode = (left, right) => {
    // 2、确认终止条件，空的条件
    if (!left && !right)
      return true
    if (!left || !right || left.val !== right.val) {
      return false
    }

    // 其他情况下的相等，并且左右子树都有值
    // 注意，这里不支持判断 left.val === right.val。因为不是一个简单的表层判断
    // 3、确认单层递归逻辑
    // 外层判断是否相等
    const outSide = compareNode(left.left, right.right)
    // 里层判断是否相等
    const inSide = compareNode(left.right, right.left)
    // 最终返回2个与
    return outSide && inSide
  }
  if (!root) {
    return true
  }
  // 对比左右节点
  return compareNode(root.left, root.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 推荐使用上面的方法，更简单直接
 * 层序遍历通过数组输出来进行判断。注意这里需要把没有子树的值都给推进去数组
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root)
    return true
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    const cur = []
    for (let i = 0; i < len; i++) {
      const el = queue.shift()
      // 值不存在时，当前数组推入 null
      cur.push(el ? el.val : null)
      // 只有当前节点存在时才往队列中推入数值
      el && queue.push(el.left)
      el && queue.push(el.right)
    }
    // 当当层数组长度大于1时，才进行判断是否为回文
    // 如果是回文的话，则说明对称
    if (cur.length > 1) {
      const res = judge(cur)
      if (!res) {
        return false
      }
    }
  }
  return true
  function judge(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
      if (arr[start] !== arr[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }
}
