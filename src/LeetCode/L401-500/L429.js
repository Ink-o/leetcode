/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * 层级遍历，需要对node.children进行遍历添加元素进队列中
 */
function levelOrder(root) {
  if (!root)
    return []
  const queue = [root]
  const ret = []
  while (queue.length) {
    const len = queue.length
    const curLevel = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      curLevel.push(node.val)
      node.children.forEach((item) => {
        queue.push(item)
      })
    }
    ret.push(curLevel)
  }
  return ret
}
