//declaring arrow function in typescript

//2 types are with and without omitting brackets for parameters
const a = (output:number | string)=>console.log(output)

const d:(b:number | string)=>void = output=>console.log(output)

//default parameters should be at the last of the parameters list in typescript and javascript

//push method can take multiple arguments in it so we can add multiple elements to array in one go.  

//spread operator and rest operator works same in typescript as javascript
//rest parameters

const n=(...numbers:number[])=>{
    return numbers
}

const m=n(21,32,45,34,21)
//passing tuple in rest parameters
const o=(...numbers:[number,number,number])=>{
    return numbers
}

const p=o(23,54,32)