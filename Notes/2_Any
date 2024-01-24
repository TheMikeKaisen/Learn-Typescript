
# Any

When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`.

For ex:  \



```
let sum;
function add(){
	Return "five"
}
sum = add()
```


Here when you hover over the variable sum, you can see the data type as **any.**


This is considered a bad practice. You usually want to avoid this, though, because `any` isn’t type-checked. Use the compiler flag <code>[noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny)</code> in the typescript configuration file to flag any implicit <code>any</code> as an error.