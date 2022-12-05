function createStack(){
    let items = [];
    return {
        push(item){
            items.push(item);
        },
        pop(item){
            items.pop(item);
        },
        getter(){
            return items;
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.getter());  //[10,5]
console.log(stack.pop());     // 5
console.log(stack.items);     // undefined
stack.items = [10,100,1000];
console.log(stack.getter());    // [10]
// comeplted