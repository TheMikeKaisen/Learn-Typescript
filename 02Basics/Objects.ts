
function createUser({ name, email, isActive }: { name: string; email: string; isActive: boolean }): string {
    // You can use 'name', 'email', and 'isActive' here
    return "function created";
}

const a = {name: "karthik", email: "k@k.com", isActive: false, username:"karthik"}

const newUser = createUser(a)


function abc(): {name:string, email: string} {
    return {name: "nothing", email: "nothing@f.com"}
}
export {}