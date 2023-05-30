## What is the difference between array.forEach() and array.map()?

* Array.forEach() method is used to iterate over an array.
* The Array.map() method is used to iterate over an array. In each iteration, it applies a callback function on the current array element and manipulates the value of elements. and finally returns a completely new array.
```
const numbers = [1,2,3,4];
const evenNumbers = numbers.map(number=> number * 2); // [2,4,6,8]
```

## What is closure?
* Function along with its lexical scope bundled together form a closure
* The function defined in the closure ‘remembers’ the environment in which it was created.
* A closure is a feature of JavaScript that allows inner functions to access their outer scope even the inner function return and after return it still remember its outer scope
* Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

![](./images/closure.png)

```
function outer() {
    const secret = "mysecret";
    function inner(){
        return secret;
    }
    return inner;
}

console.log(outer()()); // mysecret
```
## What is currying function in JavaScript ?
It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation.

```
function calculateVolume(length) {
    return function(breadth) {
        return function(height) {
            return length * breadth * height;
        }
    }
}

console.log(calculateVolume(4)(5)(6)); // 120
```


