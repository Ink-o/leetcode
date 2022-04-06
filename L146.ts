{
// 第一种实现
// 单纯使用map
// class LRUCache {
//     capacity: number;
//     map: Map<number, number>;
//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.map = new Map();
//     }

//     get(key: number): number {
//         let val = this.map.get(key);
//         if (typeof val === 'undefined') return -1;
//         this.map.delete(key);
//         this.map.set(key, val);
//         return val; 
//     }

//     put(key: number, value: number): void {
//         // 如果这个值在原本的map中已经存在的话则直接进行删除
//         if (this.map.has(key)) {
//             this.map.delete(key);
//         }
//         this.map.set(key, value);
//         // 获取map的键集合
//         let keys = this.map.keys();
//         // 如果满栈的话，则直接删除最早进入的map
//         while(this.map.size > this.capacity) {
//             this.map.delete(keys.next().value);
//         }
//     }
// }

// 第二种实现，使用双链表
class DLinkedNode {
    key: number
    val: number
    prev: DLinkedNode | undefined
    next: DLinkedNode | undefined
    constructor(key?: number, val?: number) {
        this.key = key;
        this.val = val;
    }
}
class LRUCache {
    private capacity: number
    private size: number
    private map: Map<number, DLinkedNode>
    private head: DLinkedNode
    private tail: DLinkedNode
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        // 初始化头尾节点，头尾节点都是为空的
        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    put(key: number, value: number) {
        const node = this.map.get(key);
        if (node === undefined) {
            // 新建节点
            const newNode = new DLinkedNode(key, value);
            this.map.set(key, newNode);
            this.addToHead(newNode);
            ++this.size;

            // 容量超出则移除最后一个
            if (this.size > this.capacity) {
                const last = this.removeTail();
                this.map.delete(last.key);
                --this.size;
            }
        } else {
            node.val = value;
            this.moveTohead(node);
        }
    }
    get(key: number): number {
        const node = this.map.get(key);
        if (node === undefined) {
            return -1;
        } else {
            this.moveTohead(node);
            return node.val;
        }
    }
    removeNode(node: DLinkedNode) {
        node.prev.next = node.next;
        node.prev.next.prev = node.prev;
    }
    moveTohead(node: DLinkedNode) {
        // 先移除元素
        this.removeNode(node);
        // 然后添加到头部
        this.addToHead(node);
    }
    addToHead(node: DLinkedNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    removeTail():DLinkedNode {
        const last = this.tail.prev;
        this.removeNode(last);
        return last;
    }
}
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)); // 返回 1
}