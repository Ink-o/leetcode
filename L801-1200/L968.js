/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 贪心策略：不在叶子节点放摄像头。对于叶子节点默认为被覆盖
 * 摄像头放在未被覆盖的叶子节点的父节点，这样才能被覆盖更多的叶子节点
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  let result = 0;
  function traversal(cur) {
    /**
     * 0：无覆盖
     * 1：有摄像头
     * 2：被摄像头覆盖
     */

    // 空节点，该节点默认有被覆盖，为的是防止把摄像头放在叶子节点上
    if (cur === null) {
      return 2;
    }

    let left = traversal(cur.left); // 左节点
    let right = traversal(cur.right); // 右节点

    // 中，开始执行操作
    // 如果左右节点都被摄像头覆盖，那么此节点必定是没有被覆盖的，直接返回为0
    // 如果没有被覆盖的话，则应该在它的父节点装监控
    if (left === 2 && right === 2) {
      return 0;
    }

    // 情况2
    // left == 0 && right == 0 
    // left == 1 && right == 0
    // left == 0 && right == 1
    // left == 0 && right == 2
    // left == 2 && right == 0
    // 如果左右孩子中有一个没有被覆盖，则此节点直接安装摄像头
    if (left === 0 || right === 0) {
      result++;
      return 1;
    }

    // 如果左右节点其中一个有摄像头，这个节点必定是被覆盖的
    if (left === 1 || right === 1) {
      return 2;
    }
    return -1;
  }
  // 如果根节点是没有被覆盖的状态，则直接放置相机
  if (traversal(root) === 0) {
    result++;
  }
  return result;
};