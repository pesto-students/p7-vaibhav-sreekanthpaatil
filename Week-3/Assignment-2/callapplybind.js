// bind

var person = {
    name: "Sreekanth",
    hello: function(thing){
        console.log(this.name + "says hello" + thing)
    }
}

person.hello("world");  // output is Sreekanth says hello world

var helloFun = person.hello.bind({name : "Vaibhav"}); //bind attaches this into function and it needs to be invoked suparatly
helloFun("world"); //  Output: Vaibhav says hello world

//****************************

//call

var animal = {
    name: "Bolt",
    hello: function(thing) {
        console.log(this.name + " is a " + thing);
    }

}

animal.hello("dog"); //output: Bolt is a dog
animal.hello.call({name: "Kitty"}, "cat"); // output: Kitty is a cat

//call attaches this into function and executes the function immediatly

//****************** */