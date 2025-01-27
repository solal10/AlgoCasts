// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(record){
        this.data=record
        this.left=null
        this.right=null
    }

    insert(record){
        if (this.data>record){
            if(this.left ===null){
                this.left= new Node(record)
            }
            else{
                this.left.insert(record)
            }
        }
        else{
            if(this.right === null){
                this.right = new Node(record)
            }
            else{
                this.right.insert(record)
            }
        }
    }

    contains(record){
        if(this.data===record){
            return(this)
        }
        if(this.data>record){
            if (this.left === null){
                return null
            }
            return this.left.contains(record)
        }
        else{
            if(this.right === null){
                return null
            }
            return this.right.contains(record)
        }

    }
}

module.exports = Node;
