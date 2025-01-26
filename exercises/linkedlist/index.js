// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(record,nextnode){
        this.data=record
        if(nextnode){
            this.next=nextnode
        }
        else{
            this.next=null
        }
        
    }
}

class LinkedList {
    constructor(){
        this.head=null
    }
    
    insertFirst(data){
        this.head=new Node(data,this.head)
    }

    size(){
        let count=0
        let currentnode=this.head
        while(currentnode){
            count++
            currentnode=currentnode.next
        }
        return count
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head){
            return null
        }
        let currentnode=this.head
        while(currentnode.next!==null)
        {
            currentnode=currentnode.next
        }
        return currentnode
    }

    clear(){
        this.head=null
    }

    removeFirst(){
        this.head=this.head.next
    }

    removeLast(){
        if (this.head === null){
            return
        }
        let currentnode=this.head
        if(currentnode.next === null){
            this.head=null
            return
        }
        let precedentnode=this.head
        currentnode=this.head.next
        while(currentnode.next !== null){
            precedentnode=currentnode
            currentnode=currentnode.next
        }
        precedentnode.next=null
    }

    insertLast(data){
        const lastnode=this.getLast()
        if(lastnode){
            lastnode.next=new Node(data)
        }
        else{
            this.head= new Node(data)
        }
    }

    getAt(index){
        if(!this.head){
            return null;
        }

        let counter=0;
        let node=this.head;
        while(node) {
            if(counter === index){
                return node;
            }
            counter++
            node=node.next;
        }
        return null
    }

    removeAt(index){
        if(!this.head){
            return null
        }
        let currentnode=this.head
        let precedentnode=null
        if(index ===0){
            this.removeFirst()
            return
        }
        let counter=0
        while(currentnode){
            if(counter===index){
                precedentnode.next=currentnode.next
                return
            }
            precedentnode=currentnode
            currentnode=currentnode.next
            counter++
        }
        return null
    }

    insertAt(data,index){
        if(this.head ===null){
            this.head=new Node(data)
            return
        }
        if(index===0){
            this.insertFirst(data)
            return
        }
        let node=this.getAt(index-1)
        if(node===null){
            this.insertLast(data);
            return
        }
        node.next = new Node(data,node.next)
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node=node.next;
        }
    }
}

module.exports = { Node, LinkedList };
