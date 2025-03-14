/**
 * 可以直接使用2个原始值进行收集不同金额的数量，然后进行相减
 * @param {number[]} bills
 * @return {boolean}
 * 贪心，收到5块无需处理，收到10块需要找5块，
 * 收到20块，方案1：找10+5，方案2：找3张5块。方案1优于方案2，因为5块的作用比较大
 */
function lemonadeChange(bills) {
  let fiveRest = 0
  let tenRest = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        fiveRest += 1
        break
      case 10:
        tenRest += 1
        if (fiveRest < 1)
          return false
        fiveRest -= 1
        break
      case 20:
        if (fiveRest < 1)
          return false
        if (fiveRest >= 1 && tenRest >= 1) {
          fiveRest -= 1
          tenRest -= 1
          break
        }
        if (fiveRest >= 3) {
          fiveRest -= 3
          break
        }
        return false
      default:
        break
    }
  }
  return true
}
const testArr = [5, 5, 5, 5, 10, 5, 10, 10, 10, 20]
console.log(lemonadeChange(testArr))
