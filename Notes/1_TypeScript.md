
# What is TypeScript?

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like `string` and `number`, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behaviour in your code, lowering the chance of bugs.

Javascript:

	


```
let name = "mike"
name = 7
console.log(name)

Output: 7
```


To tackle these kind of problems, typescript was introduced. _To increase more security._

Typescript:


```
let name : string = "mike"
name = 7
console.log(name) 
```


This code shows an error in Typescript, indicating the number is not assignable to type string.

Note : Even if there is any error in the typescript code, the code can be converted to javascript and it might run as well. Typescript’s job is to tell the coder the possible number of potential errors.  \
 \
 \
At the end of day, the file that runs on the browser is javascript and not typescript. Which means, all the typescript files are first converted to javascript files.


## Data Types in Typescript



1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Void
7. Object
8. Array
9. Tuple
10. Any

Data types are defined as : 


```
let num1: number = 45
let char1: character = "character" 
```


Note: When the typescript file is converted to a javascript file, typescript file would show some kind of error. This is because the typescript configuration file has not been defined. To avoid this error temporarily, just write the code below at the end of the file.


```
export {}
```


## How to convert a Typescript file into a Javascript file ?

In console, change the location to the directory where the typescript files are located, then write:

  <tr>
   <td>

```
tsc <tsFileName>
```


   </td>
  </tr>