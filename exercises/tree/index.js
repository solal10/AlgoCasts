// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(record){
        this.data=record;
        this.children=[];
    }

    add(record){
        this.children.push(new Node(record));
    }

    remove(record){
        this.children=this.children.filter(node=>{
            return node.data !== record;
        })
    }
}

class Tree {
    constructor(){
        this.root=null
    }

    traverseBF(fn){
        let temp=[this.root]
        while(temp.length){
            const node= temp.shift();
            temp.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        let temp=[this.root]
        while(temp.length){
            const node =temp.shift()
            temp.unshift(...node.children)
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
