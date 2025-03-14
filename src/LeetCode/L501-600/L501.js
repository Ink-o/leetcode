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
 * @return {number[]}
 */
function findMode(root) {
  // 不使用额外空间，使用中序遍历，设置出现最大次数初始值为1
  let count = 0
  let maxCount = 1
  let pre = root
  let res = []
  // 确定递归函数及函数参数
  const travelTree = function (cur) {
    if (!cur)
      return
    travelTree(cur.left)

    // 单层递归逻辑（每次只需要用一个count来进行维护）
    if (pre.val === cur.val) {
      count++
    }
    else {
      count = 1
    }

    // 更新上一个节点的值
    pre = cur

    // 更新结果数组
    if (count === maxCount) {
      res.push(cur.val)
    }

    // 当前数大于最大的数，更新结果数组
    if (count > maxCount) {
      res = []
      maxCount = count
      res.push(cur.val)
    }

    travelTree(cur.right)
  }
  travelTree(root)
  return res
}
