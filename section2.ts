console.log("typescript");

//let username; => set to any, that means any value can be set like below
    // username = 10
    // username = "efvgrbrv"
    

let username: string; // only strings can be set to username from now
username = "nsdds";
    
let lname = 10; //type inference
//all the values assigned to lname from now should be number only.
lname = 43;
lname = 32;
 

function add(a:number, b=5) {
    return a+b
}

add(10);
// add("10") => error
add(10, 6);
// add(20,"6") => error


let age: any = 36; //it has type inference and we can assign any type to age

age = "36";


let age1: string | number = 36 ;//union type
// we can assign a string or number to age1


//Arrays

let hobbies = ['a', 'b'];

//similar to let hobbies:string[]= ['a','b']

// hobbies.push(20) => error, we can only assign strings to this array.

let users: (string | number)[];//it will allow numbers and strings into it.

let users1: Array<string | number> ; //generic types 
//same to above code


//tuples = > arrays with fixed length and specified type (for each element)

let possibleresults:[number,number]; //[1,-1] we can store only 2 values in this with number type only

//x:[string,number] we can store the first value as string and second value as number.



// types declaring in Objects 
let user:{
    name:string;
    age:number | string;
    hobbies:string[];
    role:{
        description:string;
        id:number;
    }
}={
    name:'max',
    age:38,
    hobbies:['sports','cooking'],
    role:{
        description:'admin',
        id:5
    }
}

//must not be (null or undefined) type
let val:{}="sometype";
//here val can be any type other than null or undefined
//it can be string, number ,object, array etc.

// note related to javascript => in objects the keys can be strings or numbers or symbols also like below
// let n={
//     name:"pavan",
//     "age":23,
//     2:'wsdfre'
// }
// here we can also have symbol as a key for this object. 


// Record type (another generic) => used to tell typescript to allow only object as its value.no strings or number etc allowed.
let data:Record<string,number | string>;

data={
    name:'pavan',
    'age':23,
    2:'wefvdcfcd',
    // 'gf':false => error 
}

// enum => a list of choices
enum Role{
    Admin,   //0 default    we can set this to any other number like 4      we can set this to even string also like 'Admin'
    Editor,  //1            then this will be 5                             like 'Editor
    Guest    //2            this will be 6                                  like 'Guest'
}

let userRole: Role = 0;

console.log(userRole);

userRole = Role.Guest;

console.log(userRole);

// custom types (literal types) as an alternative to enum
let userRole1: 'admin' | 'editor' | 'guest' = 'guest'; // now 'admin','editor','guest' are treated as datatypes and userRole1 will accept only either of these 3 types (literals)

//we can also do this in tuples
let tuple1:[-1|1,1|-1];
tuple1=[1,-1]
tuple1=[1,1]
tuple1=[-1,-1]
tuple1=[-1,1]
// only these 4 variations are possible for the above scenario.

//type aliases and custom types
//setting custom types aliases
type role= 'admin' | 'guest' | 'editor' | 'reader'
let job:role='admin'
//setting custom object type
type user={
    name:string;
    age:number;
    role:role;
    permission:string[];
}
//we can use user type while defining any object with these requirements. ex :- 
let me:user;

// return type assignment in functions
function add1(a:number,b:number) :number {
    return a+b //typescript will infer it as a return type if we have not specified it means. so the return type specification is not needed all times.
    //if we specify a return type means, it will restricts the function, to return that type only.
}

//if a function does not return anything means typescript will infer it's return type to void.

//we can also use never as a return type to specify that a function will never return anything

//we can use Function as a type to specify the call back function while passing a callback function

function abc(d:Function){
    d()
}

function performJob(cb:(m:number)=>void)//this looks like an arrow function but it is not an arrow function. we are specifying this argument(basically the calback function) to accept which type of argument and to return which type.
{
    //some code
    cb(2)
}

function log(n:number)
{
    console.log(n)
}

performJob(log)

type User={
    name:string;
    greet:() => string;
}

let user5:User={
    name:"pa",
    greet(){
        console.log('sd');
        return this.name;
    }
}

//null and undefined types also their in the typescript


//we can silence the typescript if a value may get a null value like selecting dom elements, by keeping an ! symbol at the end of declaration or accessing it. we have to be aware while using this operator, because it may make us anaware of runtime errors
//we can also use optional chaining in typescript by using ?.


//optional parameters in functions
function generateError(msg?:string)//we can make this argument as optional in function call by keeping ? after it
{
    throw new Error(msg)
}

generateError()//if ? is not present means it will throw an error because it expects an argument to be passed.

//optional properties in objects
type User1={
    name:string;
    age?:number;
}

//we can also use nullish coalescing in typescript.