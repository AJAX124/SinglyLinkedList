class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        
       let temp = this.head;
       let prev = this.head;


       while(temp.next){
        prev = temp;
        temp = temp.next;
       }

       this.tail = prev;
       this.tail.next = null;
       this.length--;
       if(this.length === 0){
        this.head = null;
        this.tail = null;
       }
       return this;
    }
    unshift(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        let temp  = this.head;
        this.head = this.head.next;
        this.length--;
        temp.next = null;
        return temp;
    }
    get(index){
        let temp = this.head;
        for(let i=0;i<index;i++){
            temp = temp.next;
        }
        return temp;
    }
    set(index,val){
        let temp = this.get(index);
        if(temp){
            temp.val = val;
            return true;
        }
        else{
            return false;
        }
    }
    insert(index,val){
        if(index === 0){
            return this.unshift(val);
        }
        if(index === this.length){
            return this.push(val);
        }
        if(index<0 || index >this.length){
            return undefined;
        }

        const newNode = new Node(val);
        const temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
    }
    remove(index){
        if(index === 0){
            return this.shift();
        }
        if(index === this.length){
            return this.pop();
        }
        if(index < 0 || index>this.length){
            return undefined;
        }

        const before = this.get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return this;
    }
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for(let i=0;i<this.length;i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }

    //1. First Middle element
    
    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


    //2. reversing node

    reverseList(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for(let i=0;i<this.length;i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this.head;
    }

    //3.removing duplicated values

    removeDupliates(){
        let current = this.head;
        while(current!==null && current.next!==null){
            if(current.val === current.next.val){
                current.next = current.next.next;
                this.length--;
            }
            else{
                current = current.next;
            }
        }
        return this;
    }



    //4.removing unsortedduplicated values

    unsorted(){
        let current = this.head;
        let prev = null;
        let uniquevalues = new Set();

        while(current!==null){
            if(uniquevalues.has(current.val)){
               prev.next = current.next;
               this.length--; 
            }
            else{
                uniquevalues.add(current.val);
                prev = current;
            }
            current = current.next;
        }
        return this;
    }


    //5.Detecting Cycle

    detectCycle(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null){
            slow = slow.next;
            fast = fast.next.next;

            if(slow===fast){
                break;
            }
        }
        if(fast ===null || fast.next === null){
            return null;
        }

        let entry = this.head;
        while(entry!==null){
            slow = slow.next;
            entry = entry.next;
        }
        return slow;7
    }

}


const first = new SinglyLinkedList(10);
first.push(20)
first.push(30)
first.push(30)
first.push(40)
first.push(40)
console.log(first.findMiddle())
console.log(first.reverseList())
console.log(first.removeDupliates())
console.log(first)
