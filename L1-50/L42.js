/**
 * @param {number[]} height
 * @return {number}
 * 双指针解法
 * 思路：第1根和最后1根柱子不接雨水。对于其他的柱子，分别寻找其左边最高的柱子和右边最高的柱子，
 * 两者中的最小高度就是接雨水的高，宽度就是雨水的格子宽，也就是1
 */
// var trap = function (height) {
//   let sum = 0;
//   const len = height.length;
//   for (let i = 0; i < len; i++) {
//     // 第一个柱子和最后一个柱子不接雨水
//     if (i === 0 || i === len - 1) continue;

//     let rHeight = height[i]; // 记录右边柱子的最高高度
//     let lHeight = height[i]; // 记录左边柱子的最高高度

//     // 寻找 当前柱子的 右边柱子的最高高度
//     for (let r = i + 1; r < len; r++) {
//       if (height[r] > rHeight) {
//         rHeight = height[r];
//       }
//     }

//     // 寻找 当前柱子的 左边柱子的最高高度
//     for (let l = i - 1; l >= 0; l--) {
//       if (height[l] > lHeight) {
//         lHeight = height[l];
//       }
//     }

//     // 使用左边最高柱子和右边最高柱子的最低高度 减去 自身高度就是当前能接雨水的容量
//     let h = Math.min(lHeight, rHeight) - height[i];
//     console.log('i', i, h, lHeight, rHeight);
//     // 容量累加
//     if (h > 0) sum += h;
//   }
//   return sum;
// };

/**
 * dp解法，将每个索引的左右最大高度值块进行记忆
 * 这里是以列来进行计算面积的。所以只需要记录左右侧的最高高度，获取其中的最小高度，然后减去当前高度，就是装水面积了
 * @param {number[]} height
 * @return {number}
 * 
 */
// var trap = function (height) {
//   let maxLeft = [];
//   let maxRight = [];
//   let len = height.length;

//   // 记录每个柱子左边柱子的最大高度
//   // 头部加入height的第一个数值
//   maxLeft[0] = height[0];
//   for (let i = 1; i < len; i++) {
//     // 使用 前一个索引的值与前一个索引左侧的最大值 相比，谁的值大取谁
//     maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
//   }

//   // 记录每个柱子右边柱子的最大高度
//   // 尾部加入height数组的最后一个数值
//   maxRight[len - 1] = height[len - 1];
//   for (let i = len - 2; i >= 0; i--) {
//     // 使用 后一个索引的值与前一个索引右侧的最大值 相比，谁的值大取谁
//     maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
//   }

//   // 求和
//   let sum = 0;
//   for (let i = 1; i < len - 1; i++) {
//     // 使用左边大高度和右边最高度的最小值 - 当前高度就是收集容量
//     let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
//     if (count > 0) sum += count;
//   }
//   return sum;
// }
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));


/**
 * 单调栈解法，按行计算面积
 * 核心思路：找到凹槽，也就是左右侧都有比当前元素要大的，这样才能装上水
 * @param {number[]} height
 * @return {number}
 * 这里计算面积的方式是横向计算，而不是竖向计算
 * 整个单调栈的栈顶到栈尾是从小到大的，这里模拟栈使用了 shift/unshift 来对数组进行操作
 */
// var trap = function (height) {
//   const len = height.length;
//   if (len <= 2) return 0;
//   const st = []; // 存着下标，计算的时候用下标对应的柱子高度
//   // 推入第一个下标元素
//   st.unshift(0);
//   let sum = 0;

//   for (let i = 1; i < len; i++) {
//     const stackHead = st[0];
//     // 当前元素小于栈顶元素，则直接入栈
//     if (height[i] < height[stackHead]) {
//       st.unshift(i);
//     } else if (height[i] === height[stackHead]) {
//       // 当前元素等于栈顶元素，实际上相同值的元素只需要保存一个即可
//       // 因为相邻的相同元素，有一个最小高度是为0的
//       st.shift();
//       st.unshift(i);
//     } else {
//       // 这里使用循环来遍历
//       // 栈不能为空，并且当前遍历元素要比栈顶元素要大
//       while (st.length !== 0 && height[i] > height[st[0]]) {
//         // 凹槽底部
//         let mid = st[0]; // 将栈顶的值给缓存下来，然后进行出栈，这个值就是之前的栈顶值。原本栈顶值的左侧值就变成了现在的栈顶值
//         st.shift(); // 出栈
//         if (st.length !== 0) {
//           // 使用 栈顶左侧的数值和准备入栈的数值 中的最小值来减去 之前栈顶的数值，求出容器的高度（最小高度决定能装多少水）
//           // 当前栈顶值就是凹槽左侧第一个比其高的块
//           // 当前遍历到的值就是凹槽右侧第一个比其高的快
//           // 刚才出栈的就是凹槽
//           let h = Math.min(height[st[0]], height[i]) - height[mid];
//           // 这里计算宽度的时候需要注意，使用的是之前栈顶的左侧值，不能使用上面的缓存值mid
//           // 用右侧的索引减去当前栈顶的索引 - 1就是宽度了
//           let w = i - st[0] - 1;
//           sum += h * w;
//         }
//       }
//       // 将所有比 i 小的元素出栈后，i 再进行入栈
//       st.unshift(i)
//     }
//   }
//   return sum;
// }

/**
 * 单调递减栈
 * @param {number[]} height
 * @return {number}
 * 情况一：准备入栈元素小于栈头元素
 * 情况二：准备入栈元素等于栈头元素
 * 情况三：准备入栈元素大于栈头元素，形成凹槽，此时可以装水了
 * 单调栈解法（简约版，对情况一和二不再进行单独处理，直接都进行push处理）
 */
var trap = function (height) {
  const len = height.length;
  const st = [];
  st.unshift(0);
  let sum = 0;

  for (let i = 1; i < len; i++) {
    // 处理当前元素比栈顶元素要大的情况，也就是有凹槽的时候
    while (st.length > 0 && height[i] > height[st[0]]) {
      // 出栈，栈顶元素作为中间点
      const mid = st.shift();

      if (st.length > 0) {
        // 求宽度。此时 栈顶元素st[0] 为左边界，i 为右边界
        const w = i - st[0] - 1;
        // 求出左右边界的最小高度并且减去当前中间的高度。得出来的就是水槽高度
        const h = Math.min(height[i], height[st[0]]) - height[mid];
        sum += w * h;
      }
    }
    // 将第1、2、3的公共操作合并在一起了
    st.unshift(i);
  }

  return sum;
}
console.log(trap([5, 5, 1, 3]))