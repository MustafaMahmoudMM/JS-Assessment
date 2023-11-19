1- The function with keyword async is alwayes return with a Promise type.

2- The false values in JS:

- flase.
- 0: Number 0.
- '': empty sting.
- null.
- undefined.
- NaN.

3- The primitive and nonprimitive data type in JS:

- The primitive data type:
  . String.
  . Number.
  . Boolean.
  . Undefined.
  . Null.
  . Symbol.

- The non-primitive data type:
  . Object.
  . Array.
  . Function.
  . Date.
  . RegExp.

4- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use variables and functions before they are declared in your code.

5- var, let, and const are used to declare variables in JavaScript, and they have some key differences:

- Hoisting:
  . var: Hoisted to the top of its scope and initialized with undefined. This means you can use the variable before its declaration, but it might have the value undefined.
  . let and const: Also hoisted, but not initialized. They are in the "temporal dead zone" until the actual declaration is reached in the code. Using them before the declaration results in a ReferenceError.
- Scope:
  . var: Function-scoped (or globally-scoped if declared outside any function).
  . let and const: Block-scoped. They are confined to the block, statement, or expression where they are defined.
- Reassignment:
  . var: Can be redeclared and reassigned.
  . let: Can be reassigned but not redeclared within the same scope.
  . const: Cannot be reassigned or redeclared.
- Initialization:
  . var: Initialized with undefined by default.
  . let and const: Not initialized at the time of declaration (remain in the "temporal dead zone" until declaration is reached).

6- Functions typies in JS:

- Function Declaration:
  function myFunction() { // function body };

- Function Expression:
  var myFunction = function() { // function body };

- Arrow Function Expression:
  var myFunction = () => { // function body };

7- JavaScript is sync
Behind the scenes, when an asynchronous task is encountered, it's offloaded to the browser's Web API. The main thread remains free to execute other tasks while waiting for the asynchronous task to complete. Once the task is finished, a callback is placed in the event queue, and the event loop eventually picks it up, allowing the associated function to be executed.

8- The event loop is a crucial part of JavaScript's concurrency model. It's responsible for managing the execution of code, handling asynchronous tasks, and maintaining the responsiveness of a JavaScript runtime, whether it's in a browser or in a Node.js environment.

9- == (loose equality) and === (strict equality) are comparison operators used to compare values and they behave differently in terms of type coercion:

- Loose Equality (==):
  . Performs type coercion if the operands are of different types.
  . Tries to convert the operands to the same type before making the comparison.
  . After conversion, it checks equality

- Strict Equality (===):
  . Does not perform type coercion.
  . Compares values and their types without any conversion.
  . Only returns true if both the value and the type are the same.

10- NaN stands for "Not a Number". It is a special value that represents an unrepresentable or undefined value in the context of numbers. The type of NaN is number.

11- JS has global scope and local scope.

- Global Scope:
  .Variables declared outside of any function or block have global scope.
  .They can be accessed from any part of the code, both inside and outside functions.

- Local Scope:
  . Variables declared inside a function or a block have local scope.
  . They are only accessible within that specific function or block

- scope chain:
  . If a variable is not found in the local scope, it looks up the chain until it finds the variable or reaches the global scope.

12- A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

13- Outputs:
a- Omar ---> obj1 & obj2 point to the same object in the memory (Ref).

b-

- 21 ---> num(1) + num(1) = num(2) + str(1) = str(21) with operation (+) strings doesn't converted to numbers
- 111 ---> str(1) + num(1) = str(11) + num(1) = str(111) with operation (+) strings doesn't converted to numbers
- 111 ---> num(1) + str(1) = str(11) + num(1) = str(111) with operation (+) strings doesn't converted to numbers
- 0 ---> num(1) - num(1) = num(0) with operation (+) strings converted to numbers
- NaN ---> num(1) - NaN = NaN with operation (+) strings converted to numbers 'ss' can't converted to number
- 1ss ---> num(1) + str(ss) = str(1ss) with operation (+) strings doesn't converted to numbers
- 10 ---> num(10) - null = num(10)

c-

- undefined ---> var x: Hoisted to the top of its scope and initialized with undefined
- throw error ReferenceError: Cannot access uninitialized variable ---> let y: hoisted, but not initialized.
- 20 ---> y is initialized arleady with 20.
- 10 ---> x is initialized arleady with 10.

d-

- Aly ---> function(){console.log(this.name)} regular function has its own 'this'
- throw undefined error ---> () =>{console.log(this.name)} arrow function doesn't has its own 'this'
