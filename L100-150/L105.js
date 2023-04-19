/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 思路与106题一样，不断切割左右部分，直到最后确认一个唯一节点
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;
    const rootVal = preorder.shift();
    const rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));
    return root;
};