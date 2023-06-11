# Contents
1. [What is Typescript](#typescript)
2. [Type Annotations](#type-annotations)
3. [Type Inference](#type-inference)
4. [Object and Interfaces](#object-and-interfaces)
5. [Type vs Interface](#type-vs-interface)
6. [Classes](#classes)
7. [Access Modifiers](#access-modifiers)
8. [Generics](#generics)
9. [What is "Decorators" in TypeScript?](#what-is-decorators-in-typescript)
10. [Literal types](#literal-types)
11. [keyof only](#keyof-only)
12. [keyof typeof](#keyof-typeof)


## Typescript

* A statically typed `superset` of JavaScript that compiles to plain JavaScript.
  * Any valid JavaScript, is valid Typescript
* TypeScript adds additional developer features to JavaScript that are stripped away at compile time

![](./images/TS_JS.png)

* TypeScript is a static type checker
  * Detects errors in code without running it
* TypeScript does NOT effect the runtime behavior of JavaScript
* To run TypeScript code, we have to convert it to JavaScript FIRST
* The TypeScript to JavaScript compilation process removes all type information
* TypeScript doesn’t provide any additional runtime libraries. There’s no additional TypeScript-specific framework to learn.

**[⬆️ Back to Top](#contents)**

## [Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)

**Variables**

When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
```
let myName: string = 'Surajit';
```
N.B. `TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed.`

**Functions**
* Parameter Type Annotations: When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:
```
function greet(name: string) {
    console.log("Hello ", name);
}
```
```
// Would be a runtime error if executed!
greet(42);
Argument of type 'number' is not assignable to parameter of type 'string'.
```
* Return Type Annotations: You can also add return type annotations. Return type annotations appear after the parameter list
```
function getFavNumber() : number {
    return 7;
}
```

**[⬆️ Back to Top](#contents)**

## Type Inference
```
let myName2 = "Surajit";
let isCool2 = true;
let favNumber2 = 42;
```
Typescript know that the myName2 is string because the right hand side is a string assignment. It has infered the type from the right hand side. As the right hand side has a specific types then the variables will be created with the specific type
```
// It generates the error at compile time when its turning typescript into javascript.
myName2 = 2; // Error: type number is not assignable to type string
```

**[⬆️ Back to Top](#contents)**

## [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
```
function printId(id: number | string) {
    console.log(`Your ID ${id}`)
};

// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

## Object and Interfaces
**[Structural Type System](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#structural-type-system)**

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

```
// Describing what a Person has. Its description of Person object
interface Person {
    name: string,
    favNumber: number
}

// This is a plain object. Its not a class instance.
// Its the type of the interface Person as it has same properties and same type described by the interface
const person = {
    name: 'Surajit',
    favNumber: 7
}

function greet(person: Person) {
    console.log(`Hello ${person.name}`)
}

greet(person);
```

**[Optional Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)**

Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.
```
interface Person {
    name: string,
    favNumber?: number
}

// In case of optional property you have to check if its value exist or not before using
function greet(person: Person) {
    if (person.favNumber){
        console.log(`Hello ${person.name} Your fav number ${person.favNumber}`)
    }else {
      console.log(`Hello ${person.name}`)
    }
}

greet({name: 'Surajit'});
greet({name: 'Surajit', favNumber: 7});
```

**[⬆️ Back to Top](#contents)**

## [Type vs Interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
They are same. But cannonical way if you describing an object use interface, if you describe other things use type
`The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.`
```
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
// NO ERROR
```
```
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.
 ```

```
// interface can takes type and also method
type IdType = "Aadhar" | "Passport";

interface Person {
    name: string,
    favNumber?: number,
    idType: IdType,
    currentTime(): Date // it will return date
}

// Same description you can do by using type
type Person2 = {
    name: string,
    favNumber?: number,
    idType: IdType,
    currentTime(): Date // it will return date
}

function greet(person: Person) {
    if (person.favNumber){
        console.log(`Hello ${person.name} Your fav number ${person.favNumber}`)
    }else {
        console.log(`Hello ${person.name} You ID type ${person.idType} and the time is ${person.currentTime()}`)
    }
}

// You have to provide the required fields
greet({name: 'Surajit', idType: 'Aadhar', currentTime() {
    return new Date();
}});
```

**[⬆️ Back to Top](#contents)**

## [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
Classes allows us to define blueprint for objects.
```
class Vehicle {
    name: string;
    engine: string

    constructor(name: string, engine: string) {
        this.name = name;
        this.engine = engine;
    }
}

const bike = new Vehicle('Yamaha FZ', '149 cc');
console.log(bike)
```
shorthand of the above
```
class Vehicle {
    constructor(public name: string, public engine: string) {}
}

// name, engine are public means in the outside world we can access it
// bike.name or bike.engine
const bike = new Vehicle('Yamaha FZ', '149 cc');
console.log(bike)
```

**[⬆️ Back to Top](#contents)**

## [Access Modifiers](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
```
class Vehicle {
    static x = 0;
    constructor(
        public name: string, 
        public engine: string,
        protected internalSecret: string
        private privateSecret: string
    ) {}
}

const bike = new Vehicle('Yamaha FZ', '149 cc', 'mysecret', 'private');
/**
 * Property 'internalSecret' is protected and only accessible within class 'Vehicle' and its subclasses.
 */
console.log(bike.internalSecret);

class Car extends Vehicle {
    constructor(){
        super('BMW', '1000hp', 'S', 'P');
    }

    getProtected() {
        return this.mySecret;
    }
}

//Property 'privateSecret' is declared but its value is never read.
console.log(bike.privateSecret);

// Ok
console.log(Vehicle.x);

```
Property internalSecret is `protected` and only accessible within class or in the code running from an extended version of the class

Property privateSecret is `private` and only accessible within class

Classes may have `static` members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself

**[⬆️ Back to Top](#contents)**

## Generics
```
function identity(arg: any): any {
  return arg;
}
```

While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
```
function identity<Type>(arg: Type): Type {
  return arg;
}
```

We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use Type again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

We say that this version of the identity function is generic, as it works over a range of types. 
```
function sortItems<T>(items: T[], compareFun: (a:T, b:T)=> number): T[] {
    return items.sort(compareFun)
}

console.log(sortItems([2,5,1,10,4], (a,b)=> a-b));
console.log(sortItems(['sura', 'avi', 'abir'], (a,b)=> a.localeCompare(b)))
```
```
/** A class definition with a generic parameter */
class Queue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // ERROR : cannot push a string. Only numbers allowed
```
**[⬆️ Back to Top](#contents)**

## [What is "Decorators" in TypeScript?](https://www.typescriptlang.org/docs/handbook/decorators.html)
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators are functions that take their target as the argument. With decorators we can run arbitrary code around the target execution or even entirely replace the target with a new definition.

There are 4 things we can decorate in ECMAScript2016 (and Typescript): constructors, methods, properties and parameters.

**[⬆️ Back to Top](#contents)**

## [Literal types](https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript)
Literal types in TypeScript are more specific types of string, number or boolean.
A literal type can be declared as following:

```
type Greeting = "Hello"
```

This means that the object of type Greeting can have only a string value "Hello" and no other string value or any other value of any other type as shown in the following code:

```
let greeting: Greeting
greeting = "Hello" // OK
greeting = "Hi"    // Error: Type '"Hi"' is not assignable to type '"Hello"'
```

Literal types are not useful on their own, however when combined with union types, type aliases and type guards they become powerful.

Following is an example of union of literal types:
```
type Greeting = "Hello" | "Hi" | "Welcome"
```
Now the object of type Greeting can have the value either "Hello", "Hi" or "Welcome".
```
let greeting: Greeting
greeting = "Hello"       // OK
greeting = "Hi"          // OK
greeting = "Welcome"     // OK
greeting = "GoodEvening" // Error: Type '"GoodEvening"' is not assignable to type 'Greeting'
```

**[⬆️ Back to Top](#contents)**

## keyof only
keyof of some type T gives you a new type that is a union of literal types and these literal types are the names of the properties of T. The resulting type is a subtype of string.

For example, consider the following interface:
```
interface Person {
    name: string
    age: number
    location: string
}
```
Using the keyof operator on the type Person will give you a new type as shown in the following code:
```
type SomeNewType = keyof Person
```
This SomeNewType is a union of literal types ("name" | "age" | "location") that is made from the properties of type Person.

Now you can create objects of type SomeNewType:
```
let newTypeObject: SomeNewType
newTypeObject = "name"           // OK
newTypeObject = "age"            // OK
newTypeObject = "location"       // OK
newTypeObject = "anyOtherValue"  // Error...
```

**[⬆️ Back to Top](#contents)**

## keyof typeof
**keyof typeof together on an object**

As you might already know, the typeof operator gives you the type of an object. In the above example of Person interface, we already knew the type, so we just had to use the keyof operator on type Person.

But what to do when we don't know the type of an object or we just have a value and not a type of that value like the following?
```
const car = { name: "BMW", power: "1000hp" }
```
This is where we use keyof typeof together.

The typeof bmw gives you the type: `{ name: string, power: string }`

And then keyof operator gives you the literal type union as shown in the following code:
```
type carType = typeof car; // {name: string, engine: string}

type carLiteralType = keyof carType; //Literal type unions
let carPropertyLiteral: carLiteralType;
carPropertyLiteral = "name";
console.log(carPropertyLiteral);    // name
carPropertyLiteral = "power";
console.log(carPropertyLiteral);    // power
```

**keyof typeof on an enum**

In TypeScript, enums are used as types at compile-time to achieve type-safety for the constants but they are treated as objects at runtime. This is because, they are converted to plain objects once the TypeScript code is compiled to JavaScript. So, the explanation of the objects above is applicable here too. The example given by OP in the question is:
```
enum ColorsEnum {
    white = '#ffffff',
    black = '#000000',
}
```
Here ColorsEnum exists as an object at runtime, not as a type. So, we need to invoke keyof typeof operators together as shown in the following code:
```
type Colors = keyof typeof ColorsEnum

let colorLiteral: Colors
colorLiteral = "white"  // OK
colorLiteral = "black"  // OK
colorLiteral = "red"    // Error...
```

**[⬆️ Back to Top](#contents)**
