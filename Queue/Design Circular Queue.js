/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.data = new Array(k);
    this.size = k;
    this.front = -1;
    this.rear = -1;
    this.length = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(!this.isFull()) {
        this.rear = (this.rear + 1) % this.size;
        this.data[this.rear] = value;
        this.length++;
        if(this.front === -1) this.front = this.rear;
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(!this.isEmpty()) {
        let element = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front+1) % this.size;
        this.length--;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.data[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */