// 元素构造函数
function Element(value) {
  this.value = value
}
class UnionFindSet {
  constructor(list) {
    this.elementMap = new Map() // k为element，v为element
    this.fatherMap = new Map() // k为element，v为element的父亲
    this.rankMap = new Map() // k为element，v为该集合的大小
    // 各种Map数据初始化
    list.forEach((val) => {
      const el = new Element(val)
      this.elementMap.set(val, el)
      this.fatherMap.set(val, el) // 默认初始化为自身为自身的父亲
      this.rankMap.set(val, 1) // 默认初始化为sizeMap自身为1
    })
  }

  findHead(element) {
    const path = []
    // 迭代找到最顶部的节点
    while (element !== this.fatherMap.get(element)) {
      path.push(element)
      element = this.fatherMap.get(element)
    }
    // 统一将这个头部节点的子节点的父节点设置成当前顶部节点
    while (path.length !== 0) {
      this.fatherMap.set(path.pop(), element)
    }
    return element
  }

  isSameSet(a, b) {
    // 如果a,b两个属性都在elementMap中并且a,b两个属性的头部是相同的时候就代表两个属于同一头部
    if (this.elementMap.has(a) && this.elementMap.has(b)) {
      return this.findHead(this.elementMap.get(a)) === this.findHead(this.elementMap.get(b))
    }
    return false
  }

  union(a, b) {
    if (this.elementMap.has(a) && this.elementMap.has(b)) {
      const aF = this.findHead(this.elementMap.get(a))
      const bF = this.findHead(this.elementMap.get(b))
      if (aF !== bF) {
        const big = this.rankMap.get(aF) >= this.rankMap.get(bF) ? aF : bF
        const small = big === aF ? bF : aF
        this.fatherMap.set(small, big) // 设置size比较小的节点的头部为size较大的头部
        this.rankMap.set(big, this.rankMap.get(aF) + this.rankMap.get(bF)) // 更新size
        this.rankMap.delete(small) // size较小的节点直接从sizeMap中进行移除，sizeMap中保存的只有作为头的节点
      }
    }
  }
}
function test() {
  const set = new UnionFindSet(['a', 'b', 'c'])
  console.log(set.isSameSet('a', 'b'))
}
test()
