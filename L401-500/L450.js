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
 * @param {number} key
 * @return {TreeNode}
 * 思路：前序遍历，详细解析如下
 * https://programmercarl.com/0450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E9%80%92%E5%BD%92
 */
var deleteNode = function (root, key) {
  if (!root) {
    return root;
  }
  // 值匹配上了
  if (root.val === key) {
    // 左节点不存在时，直接返回右节点
    if (!root.left) {
      // 直接忽略当前节点，返回右子节点（相当于执行了删除操作）
      return root.right;
    } else if (!root.right) {
      // 直接忽略当前节点，返回左子节点（相当于执行了删除操作）
      return root.left;
    } else {
      // 左右节点都存在

      // 获取当前节点的右节点
      let cur = root.right;
      // 迭代获取最底部的左节点
      // ⭐️（为什么要获取最底部的左节点？因为右边的节点一定是比当前的目标节点的左节点要大的，这里是找一个合适的位置来将删除的左节点进行存放）
      while (cur.left) {
        cur = cur.left;
      }
      // 当前节点的右节点的底部左节点连接当前节点的左节点
      cur.left = root.left;
      // 当前节点移动为其右节点
      root = root.right;
      return root;
    }
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};