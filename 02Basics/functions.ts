function addTwo(num:number){ // mandatory to provide type inference inside function
    return num+2
}
let s: number = addTwo(5)

function login(name: string, email:string, password: number = 12345){
    return "welcome"
}
let a = login("karthik", "k@k.com")


