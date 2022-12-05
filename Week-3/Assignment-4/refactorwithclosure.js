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