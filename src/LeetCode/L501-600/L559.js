/**
 * @param {Node|null} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root)
    return 0
  let resNum = 0
  // 计算出n叉树中，深度最深的子节点层数
  for (let i = 0; i < root.children.length; i++) {
    resNum = Math.max(maxDepth(root.children[i]))
  }
  // 最后再加上根节点深度1
  return 1 + resNum
}
