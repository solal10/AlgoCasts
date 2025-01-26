// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stackqueue= new Stack()
        this.stacktemp= new Stack()
    }

    add(record){
        this.stackqueue.push(record)
    }

    balancequeuetotemp(){
        while(this.stackqueue.peek()){
            this.stacktemp.push(this.stackqueue.pop())
        }
    }

    balancetemptoqueue(){
        while(this.stacktemp.peek()){
            this.stackqueue.push(this.stacktemp.pop())
        }
    }


    remove(){
        this.balancequeuetotemp()
        let temp=this.stacktemp.pop()
        this.balancetemptoqueue()
        return temp
    }

    peek(){
        this.balancequeuetotemp()
        let temp=this.stacktemp.peek()
        this.balancetemptoqueue()
        return temp
    }
}

module.exports = Queue;
