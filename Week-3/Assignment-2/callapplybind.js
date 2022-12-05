// bind

var person = {
    name: "Sreekanth",
    hello: function(thing){
        console.log(this.name + "says hello" + thing)
    }
}

person.hello("world");  // output is Sreekanth says hello world