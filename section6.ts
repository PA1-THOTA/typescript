class user{
    name:string;
    age:number;
    //in javascript we need not create name and age variables, because they are created on the fly. but in typescriot we have to create them before initialization, so as to use in the constructor also.
    constructor(n:string,a:number){
        this.name=n;
        this.age=a
    }
}

new user('wfrgtb',34) //   instantiation / creating object

//another way of writing classes in typescript
class user1{
    //public hobbies:string[]=[]
    //hobbies:string[]=[] this will be treated as public by default
    constructor(public name:string,public age:number){}
    //here we need not declare variables before initialization and need not assign the values coming at the time of object creation.typescript will automatically do it for us.
    //here we can use private also in place of public, that is a future topic 
    //without public typescript will no longer create a property with that variable name in the class
    // we can create different variables (other than passing in the constructor) before constructor definition with/ without access modifiers.like above

}

new user1('dffgdv',345)


//in javasript if we add # symbol before property,then it will be a private property to that class.

//private variables are the variables that are only accesible inside the class, where they are created. 
//public variables are accesible all over.
//protected variables are accessible like private variables and they are also accessible in classes that inherits that class

//we can add read only before variable name and after access modifiers to make the variable read only(like const key word).By doing so we cannot change its value,but we can push and modify arrays like const key word

class a{
    public readonly n:number;
    constructor(private name:string){}
}

// we have getters and setters in typescript, they are basically methods. see image in laptop for reference

//we have to initialize a class variables shown in that course, but we are not getting any error now(in course he got an error)

class k{
    public m:string;
    private n:number;

    get fu(){
        return this.m+this.n
    }
}

// we can use static keyword in typescript in class to make some properties like methods or variables in a class to make them related to the class and not to the object.


class m{
    static n:string='pav';
    static print(v:string){
        console.log(v)
    }
    
}

const y=new m()
console.log(m.n)

m.print('sdfedcs')

//we cannot access static members using object reference

//we have to call super method (method of super class) with/without arguments as required by the constructor in the sub class

//we do have abstract classes in typescript like java. we cant create object for an abstract class. They can be only inherited by other classes.


//Interfaces - refer pics once.

//interfaces while using for object blueprint behaves same as creating a blueprint with type keyword.

//the only difference between interfaces and type keyword is we can implement declaration merging where we can redeclare an interface by adding extra features to it, which cant be done by type. this will be useful for us when we want to add extra properties to interfaces that we use from third party packages/libraries. refer pics for clarity

//interfaces can also be used to declare function type. refer pic once.

//we can implement an interface in a class by using implements keyword. By doing so we can set a class to have certain shape.

//we can extend an interface in another interface by using extends keyword. we can add new properties to the newly created interface by having already existed properties in the parent interface. this will not disturb the parent interface but creates an another interface which will have all the properties of parent class and new properties that we have added to it.
