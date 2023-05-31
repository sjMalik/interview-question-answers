# Contents
1. [What is Typescript](#typescript)
2. [Type Annotations](#type-annotations)
3. [Type Inference](#type-inference)
4. [Object and Interfaces](#object-and-interfaces)
5. [Type vs Interface](#type-vs-interface)
6. [Classes](#classes)
7. [Access Modifiers](#access-modifiers)


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

//Property 'privateSecret' is declared but its value is never read.
console.log(bike.privateSecret);

// Ok
console.log(Vehicle.x);

```
Property internalSecret is `protected` and only accessible within class or in the code running from an extended version of the class

Property privateSecret is `private` and only accessible within class

Classes may have `static` members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself

**[⬆️ Back to Top](#contents)**