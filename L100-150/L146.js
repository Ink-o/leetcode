/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
 * 获取 key 的时候，如果先前存在 key 的话，需要把先前的 key 删掉。再进行重新设置
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let val = this.map.get(key);
  if (typeof val === 'undefined') return -1;
  // 从先前的位置删除
  this.map.delete(key);
  // 再次设置进去，保证处于第一位
  this.map.set(key, val);
  return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果这个值在原本的map中已经存在的话则直接进行删除
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  // 这里是提前设置了 map 的内容
  this.map.set(key, value);
  // 获取map的键集合，这是一个迭代器，顺序是进入map设置key的顺序
  // 迭代器对象：{done: boolean, value: unknown}
  let keys = this.map.keys();
  // 如果满栈的话，则直接删除最早进入的map
  while (this.map.size > this.capacity) {
    this.map.delete(keys.next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */