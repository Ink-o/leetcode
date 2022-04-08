var MyQueue = function() {
    this.stackIn = []; // 保存进栈元素
    this.stackOut = []; // 保存出栈元素
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 出队过程：现将stackIn的元素全部出栈放到stackOut中，然后再对stackOut出栈
    const size = this.stackOut.length;
    // 如果stackOut数组中有值，则直接进行pop出栈
    if (size) {
        return this.stackOut.pop();
    }
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 返回队列开头的元素，首先队列出队，然后再进队
    const x = this.pop();
    this.stackOut.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackIn.length && !this.stackOut.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */