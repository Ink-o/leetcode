/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, arr = []) {
  if (!root)
    return arr
  arr.push(root.val)
  preorderTraversal(root.left, arr)
  preorderTraversal(root.right, arr)
  return arr
}

/**
 * 迭代前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var preorderTraversal = function (root) {
  if (!root) {
    return []
  }
  const ret = []
  // 栈先加入根节点
  const stack = [root]
  while (stack.length) {
    const ele = stack.pop()
    ret.push(ele)
    // 先进栈右节点
    ele.right && stack.push(ele.right)
    // 再进栈左节点
    ele.left && stack.push(ele.left)
  }
  return ret
}
