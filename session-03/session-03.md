# Operators and Conditional Statements
*by Guillermo Montecinos*

## Operators
An operator is a construct defined within a programming language that performs an operation with the values passed to it. Javascript has a variety of operators that include the assignment operator `=` and arithmetic operators like `+`, `-`, `*` and `/`, among others.
### Comparison operators
A comparison operator compares its operands and returns a boolean value based on whether the comparison is true. If you attempt to compare mixed data types, like strings with numbers, JavaScript will try to convert the string into a number before comparing them.

#### less than `<` and greather than `>`
When comparing numbers, the operator returns a boolean based on the mathematical comparition.

```js
// less than
2 < 3 //returns true 

3 < 2 //returns false 

// greather than
2 > 3 //returns false 

3 > 2 //returns true 
```

When comparing strings, the operator compares chracter by character based on their alphabetical order.
```js
'b' < 'a' //returns false

'b' < 'c' //returns true

'abc' < 'aaa' //returns false because 'b' is not less than 'a'

'abc' < 'abd' // returns true because 'c' is less than 'd'
```

#### less or equal than: `<=` and greather or equal than: `>=`
Similar to `<` and `>` but also returns `true` when both values are equal.
```js
12 < 12 //returns false

12 <= 12 //returns true
```

The same applies to strings, always comparing their alphabetical order.

```js
'a' < 'a' //returns false, cause both strings position in the alphabet are the same, thus not different

'a' <= 'a' //returns true
```

#### Equal `==` and Not equal `!=`
Equal `==` returns `true` when the operands are equal and `false` when they are not, while Not equal `!=` returns `true` when the operands are not equal and `false` when they are equal.

```js
// number - number
2 == 2 // returns true

2 != 2 // returns false

// number - string
2 == '2' // returns true because converts the string '2' into the number 2

2 != '2' // returns false because converts the string '2' into the number 2, then both numbers are equal

// string – string
'2' == '2' // returns true

'2' != '2' // returns false

// number – number
02 == 2 // returns true

02 != 2 // returns false

// string – number
'02' == 2 // returns true because converts the string '02' into a number: 2

'02' != 2 // returns false because converts the string '02' into a number: 2, which is equal to 2

// string - string
'02' == '2' // returns false because compares the first characters of each string, and '2' is not equal to '2'

'02' != '2' // returns true because compares the first characters of each string, and '2' is not equal to '2'
```

### Logical operators
Logical operators are used to compare boolean values, and there are three different operators: **AND** `&&`, **OR** `||` and **NOT** `!`.

#### **AND** `&&`
**AND** operator returns `true` only if the two operands are `true`, otherwise it returns `false`. For example:

```js
let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); //will print false
```

|`bool1`|`bool2`|`bool1 && bool2`|
|---|---|---|
|`true`|`true`|`true`|
|`true`|`false`|`false`|
|`false`|`true`|`false`|
|`false`|`false`|`false`|

#### **OR** `||`
Unlike **AND**, **OR** returns `true` when at least one of the operands equals `true`.

```js
let bool1 = true;
let bool2 = false;

console.log(bool1 || bool2); //will print true
```

|`bool1`|`bool2`|`bool1 \|\| bool2`|
|---|---|---|
|`true`|`true`|`true`|
|`true`|`false`|`true`|
|`false`|`true`|`true`|
|`false`|`false`|`false`|

#### **NOT** `!`
The **NOT** operator returns the opposite of the current boolean value.

```js
let bool1 = true;

console.log(bool1); //print true

console.log(!bool1); //print false
```

### If – else if – else
The `if` statement is a special structure existing in almost every programming language that takes a `condition` –expressed as a boolean– and performs a piece of code contained inside the curly braces `{}`. 

```js
if(condition){
    // execute the code corresponding to the case that meets the test condition
}
```

The `if` statement can be complemented with the `else if` statement that adds test conditions complementary to the original one, and by the `else` statement that implies all the cases that don't meet the original `condition`. (Note: you can add as much `else if` statements as you want)

```js
if(condition1){
    // execute the code corresponding to the case that meets the test condition1
}
else if(condition2){
    // execute the code corresponding to the case that meets the test condition2
}
else{
    // execute the code corresponding to the case that doesn't meet any of the conditions above
}
```

## Sources
* [MDN web docs – Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* [MDN web docs – `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Stack overflow](https://stackoverflow.com/questions/10863092/why-is-string-11-less-than-string-3).