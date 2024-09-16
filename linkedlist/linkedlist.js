class Node {
    constructor(data){
        this.data = data;
        this.next  = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
    }
    addTop(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    size(){
        let count = 0;
        let current = this.head;
        while(current.next){
            count++;
            current = current.next;
        }
        return count;
    }

    addAt(index,data){
        let newNode = new Node(data);
        if(index===0){
            this.addTop(data);
            return;
        }
        if(index<0 || index>this.size()){
            console.log('Invalid Index');
            return;
        }
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        
    }

    removeTop(){
        if(this.head==null){
            console.log('List is empty');
            return;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(this.head==null){
            console.log('List is empty');
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }
    removeAt(index){
        if(index===0){
            this.removeTop();
            return;
        };
        if(index<0|| index>this.size()){
            console.log('Invalid Index');
            return;
        }
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        current.next = current.next.next;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    
    }
}

const linkedlist = new linkedList();
linkedlist.addTop(1);
linkedlist.addTop(2);
linkedlist.addTop(3);
linkedlist.addAt(1,4);
linkedlist.addLast(5);
linkedlist.removeTop();
linkedlist.removeLast();
linkedlist.removeAt(2);
linkedlist.addAt(0,6);
linkedlist.print();
