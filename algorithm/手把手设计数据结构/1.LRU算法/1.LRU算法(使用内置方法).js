/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cap = capacity
  this.cache = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(!this.cache.has(key)) {
      return -1
  }
  // 将key 变为最近使用
  this.makeRecently(key)
  return this.cache.get(key)
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)) {
      // 修改key的值
      this.cache.set(key,value);
      // 将key 变为最近使用
      this.makeRecently(key)
      return
  }

  if(this.cache.size >= this.cap) {
      // 链表头部就是最久未使用的key
      const oldestKey = this.cache.keys().next().value
      // 删除掉这个节点
      this.cache.delete(oldestKey)
  }
  // 将新的key 添加到链表尾部
  this.cache.set(key,value)
  

};
LRUCache.prototype.makeRecently = function(key) {
  const val = this.cache.get(key)
  // 删除key 重新插入到队尾
  this.cache.delete(key)
  this.cache.set(key,val)
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/