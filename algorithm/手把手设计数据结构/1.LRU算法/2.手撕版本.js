// 双链表的节点

var Node = function (k, v) {
  this.key = k;
  this.val = v;
  this.next = null;
  this.prev = null;
};

// 构建一个双链表
class DoubleList {
  constructor() {
    // 头尾虚节点
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    // 链表元素数量
    this.size = 0;

    // 初始化双向链表的数据
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 在链表尾部添加节点X，事件O(1)
  addLast(x) {
    // 定义x节点的上下文
    x.prev = this.tail.prev;
    x.next = this.tail;
    // 定义尾部虚节点的上下文
    this.tail.prev.next = x;
    this.tail.prev = x;
  }

  // 删除链表中的x节点（x 一定存在）
  /* 由于是双链表且给的是目标Node节点，事件O(1) */
  remove = function (x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this.size--;
  };

  // 删除链表中第一个节点，并返回该节点，时间O(1)
  removeFirst = function () {
    if (this.head.next === this.tail) {
      return null;
    }
    var first = this.head.next;
    this.remove(first);
    return first;
  };

  // 返回链表长度，时间O(1)
  size = function () {
    return this.size;
  };
}


// 将双向链表和哈希表结合

//TODO: 此时我们需要同时维护一个双链表 cache和一个哈希表 map
/**
 * 我们很容易漏掉某些操作 比如删除某个key的时候，在cache中删除而忘了在map中删除
 * 所以我们需要抽象一个API 来统一管理
 * @param {*} capacity 
 */


var LRUCache = function(capacity) {
  // key -> Node(key,val)
  this.map = new Map()
  // Node(k1, v1) <-> Node(k2, v2)...
  this.cache = new DoubleList()
  // 最大容量
  this.cap = capacity

  /* 将某个key 提升为最近使用的 */
  this.makeRecently = function(key) {
    var x = map.get(key)
    // 先从链表中删除这个节点
    cache.remove(x)
    // 重新插到队尾
    this.cache.addLast(x)
  }

  /* 添加最近使用的元素 */
  this.addRecently = function(key,val) {
    var x =new Node(key,val);
    // 链表尾部就是最近使用的元素
    cache.addLast(x)
    // 在map中添加key 的映射
    map.remove(key) 
  }

  /* 删除最久未使用的元素 */
  this.removeLeastRecently = function() {
    // 链表头部的第一个元素就是最久未使用的
        var deletedNode = cache.removeFirst();
        // 同时别忘了从 map 中删除它的 key
        var deletedKey = deletedNode.key;
        map.remove(deletedKey);
  }
}

// get方法操作
LRUCache.prototype.get = function(key) {
  if (!map.has(key)) {
      return -1;
  }
  // 将该数据提升为最近使用的
  makeRecently(key);
  return map.get(key).val;
};
LRUCache.prototype.put = function(key,val) {
  if (map.has(key)) {
    // 删除旧的数据
    deleteKey(key);
    // 新插入的数据为最近使用的数据
    addRecently(key, val);
    return;
  }

  if (cap === cache.size) {
    // 删除最久未使用的元素
    removeLeastRecently();
  }
  // 添加为最近使用的元素
  addRecently(key, val);
};

