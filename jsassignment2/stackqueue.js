function Stack(num) {
    var items = [];
    maxLength = num;
    minLength = 0;
    function push(element) {
        if (items.length >= maxLength) throw 'Stack Full Cannot add more element';
        else if (element === undefined) throw 'pass proper parameter which has to be pushed to Stack';
        else items.push(element);
    };
    function pop() {
        if (items.length === minLength) throw 'nothing to pop out the Stack is empty';
        else console.log(items.pop());
    };
    function print() {
        console.log(items.toString());
    };
    function size() {
        console.log(items.length);
    }
    return {
        push: push,
        pop: pop,
        print: print,
        size: size,
    };
};

let Stack1 = Stack(20);
Stack1.push("item 0");
Stack1.push("item 1");
Stack1.pop();



/* Stack1.push("item 0");
Stack1.push("item 1");
Stack1.push("item 2");
Stack1.push("item 3");
Stack1.push("item 4");
Stack1.push("item 5");
Stack1.push("item 6");
Stack1.push("item 7");
Stack1.push("item 8");
Stack1.push("item 9");
Stack1.push("item 10");
Stack1.push("item 11");
Stack1.push("item 12");
Stack1.push("item 13");
Stack1.push("item 14");
Stack1.push("item 15");
Stack1.push("item 16");
Stack1.push("item 17");
Stack1.push("item 18");
Stack1.push("item 19");
Stack1.push("item 20");
Stack1.pop();
Stack1.push("item 20");
Stack1.pop();
Stack1.size();
Stack1.print(); */

function Queue(num) {
    var items = [];
    maxLength = num;
    minLength = 0;
    function add(element) {
        if (items.length >= maxLength) throw 'Queue Full Cannot add more element';
        else if (element === undefined) throw 'pass proper parameter which has to be added to Queue';
        else items.push(element);
    };
    function remove() {
        if (items.length === minLength) throw 'nothing to remove out Queue is Empty';
        else console.log(items.shift());
    };
    function print() {
        console.log(items.toString());
    };
    function size() {
        console.log(items.length);
    }
    return {
        add : add,
        remove : remove,
        print : print,
        size : size,
    };
};

let Queue1 = Queue(20);
Queue1.add("item 0");
Queue1.add("item 1");
Queue1.remove();
 
/*
Queue1.add("item 0");
Queue1.add("item 1");
Queue1.add("item 2");
Queue1.add("item 3");
Queue1.add("item 4");
Queue1.add("item 5");
Queue1.add("item 6");
Queue1.add("item 7");
Queue1.add("item 8");
Queue1.add("item 9");
Queue1.add("item 10");
Queue1.add("item 11");
Queue1.add("item 12");
Queue1.add("item 13");
Queue1.add("item 14");
Queue1.add("item 15");
Queue1.add("item 16");
Queue1.add("item 17");
Queue1.add("item 18");
Queue1.add("item 19");
Queue1.add("item 20");
Queue1.remove();
Queue1.add("item 20");
Queue1.remove();
Queue1.size();
Queue1.print(); */