/**
 * 动态规划解法
 * @param {number[]} heights
 * @return {number}
 * 思路：当前柱子的高度作为高，其右边第一个比自己小的柱子索引 - 其左边第一个比自己的小柱子索引 - 1 作为宽
 * 宽高相乘获得面积
 */
// var largestRectangleArea = function(heights) {
//     const len = heights.length;
//     const minLeftIndex = new Array(len);
//     const minRightIndex = new Array(len);

//     // 记录每个柱子，左边第一个小于该柱子的下标
//     minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环

//     // 寻找第 i 项 左边 第一个比自己小的索引
//     for (let i = 1; i < len; i++) {
//         let t = i - 1;
//         // 这里不是用if，而是不断向左寻找的过程。-1 代表不存在这个值
//         while (t >= 0 && heights[t] >= heights[i]) {
//             /**
//              * 这里使用了记忆化搜索，i - 1的实际值如果要比当前值大的时候，则给t赋值为
//              * minLeftIndex[t]，这个值的含义就是t值左边的第一个比自己小的数值
//              */
//             t = minLeftIndex[t];
//         }
//         // 遍历到最后遇上 -1 的值则直接进行赋值即可
//         minLeftIndex[i] = t;
//     }
//     console.log('minLeftIndex', minLeftIndex);

//     // 寻找第 i 项 右边 第一个比自己小的索引
//     minRightIndex[len - 1] = len;
//     // 这里需要从后往前进行遍历，因为需要保证i + 1的值是已经计算好了的。如果值还未进行初始化的时候，会出现问题
//     for (let i = len - 2; i >= 0; i--) {
//         let t = i + 1;
//         // t为len时 代表不存在这个值
//         while (t < len && heights[t] >= heights[i]) {
//             t = minRightIndex[t];
//         }
//         minRightIndex[i] = t;
//     }
//     console.log('minRightIndex', minRightIndex);

//     // 求和
//     let maxArea = 0;
//     for (let i = 0; i < len; i++) {
//         let sum = heights[i] * (minRightIndex[i] - minLeftIndex[i] - 1);
//         maxArea = Math.max(maxArea, sum);
//     }
//     return maxArea;
// };
// largestRectangleArea([2,1,5,6,2,3]);

/**
 * 单调栈解法
 * @param {number[]} heights
 * @return {number}
 * 栈顺序，从栈尾到栈头，按从小到大排序
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []
  // 这里的头部和尾部插入0，因为第1个和最后1个数值，其左/右都没有比其更小的数值了
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i)
    }
    else if (heights[i] === heights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    }
    else {
      while (heights[i] < heights[stack[stack.length - 1]]) {
        const stackTopIndex = stack.pop()
        const w = i - stack[stack.length - 1] - 1
        const h = heights[stackTopIndex]

        // 取最大面积
        maxArea = Math.max(maxArea, w * h)
      }
      stack.push(i)
    }
  }
  return maxArea
}

/**
 * 单调栈解法
 * @param {number[]} heights
 * @return {number}
 * 栈顺序，简约解法，里面的单调栈，从栈尾到栈头是按照从小到大排序
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []
  // 这里的头部和尾部插入0，因为第1个和最后1个数值，其左/右都没有比其更小的数值了
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 中心点，此时stack[stack.length - 1]就是左侧第一个比中心点小的元素，i 是右侧第一个比中心点小的元素
      const mid = stack.pop()
      // 计算宽度范围
      const w = i - stack[stack.length - 1] - 1
      const h = heights[mid]

      // 取最大面积
      maxArea = Math.max(maxArea, w * h)
    }
    stack.push(i)
  }
  return maxArea
}
largestRectangleArea([2, 1, 5, 6, 2, 3])
