//first deliverable.
function receivesAFunction(randomFunction) {
    randomFunction();
}

//function creation for second deliverable.
function randomFunction() {
console.log("hi");
}

const sayHello = console.log("Hello");

//second deliverable.
function returnsANamedFunction() {
    return randomFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Third deliverable");
    }
}