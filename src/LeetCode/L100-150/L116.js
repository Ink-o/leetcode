/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) {
    return root
  }
  const queue = [root]
  while (queue.length) {
    let pre = null
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      // 初始化pre指针节点
      if (i === 0) {
        pre = node
        continue
      }
      // 更新next指针
      pre.next = node
      // 更新pre
      pre = node
    }
    // 给最后一个节点的next赋值为null
    pre.next = null
  }
  return root
}
