console.log("typescript")

//let username; => set to any, that means any value can be set like
    // username = 10
    // username = "efvgrbrv"
    

let username: string; // only strings can be set to username from now
    username = "nsdds"
    
let lname = 10 //type inference
//all the values assigned to lname should be number only.
lname = 43
lname = 32
 

function add(a:number, b=5) {
    return a+b
}

add(10)
// add("10") => error
add(10, 6)
// add(20,"6") => error


let age: any = 36; //it has type inference and we can assign any type to age

age = "36"


let age1: string | number = 36 //union type
// we can assign a string or number to age1


//Arrays

let hobbies = ['a', 'b']

//similar to let hobbies:string[]= ['a','b']

// hobbies.push(20) => error, we can only assign strings to this array.

let users: (string | number)[];//it will numbers and strings into it.

let users1 = Array<string | number>//generic types 
//same to above code

// asdfsd