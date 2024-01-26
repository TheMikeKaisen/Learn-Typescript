


# Objects in JavaScript


```
let person = { name: "John", age: 30 };
```


Creating an object in ts is as simple as shown above. \
 \
 \
You can add more specific properties to it such as:


```
let person: Person = { name: "John", age: 30 };
```


OR \



```
let person = { name: "John", age: 30 };
type Person = { name: string; age: number };
let person: Person = { name: "John", age: 30 };
```



## Returning objects in function


```
function person(){} : {
return {}
}
```


Syntax for how to add type inference on returning objects in a function.


```
function createUser({name, email, isActive},{name: string, email: string, isActive: boolean}) : string {
     return "function created"
}
```


Here, createUser function takes name and email as parameters, but if a person need to provide another parameter to the function, he can’t do it like this:

 \



```
const newUser = createUser({name: "mike", email: "m@m.com", isActive: false, username : "kaisen"})
```


This would provide an error.

Instead we need to code it this way:


```
function abc(): {name:string, email: string} {
   return {name: "nothing", email: "nothing@f.com"}
}
```

