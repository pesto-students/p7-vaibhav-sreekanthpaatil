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

//apply

function billionaireContainer(){
    var billionaire = {
        name: "Jeff bezos",
        hello: function(){
            console.log(this.name + "says hello" + arguments[1]);
        }
        

    }

    billionaire.hello.apply(billionaire, arguments);
}

 billionaireContainer("world","mars"); //output: Jeff bozz says hello mars
// notes: arguments[0]="world", arguments[1]="mars"
//apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time