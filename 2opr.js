//Arithmetic opr
function Arithmetic(){
    let a=10
    let b=5
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a**b)
    console.log(a%b)
}Arithmetic()

//Assignment opr
function assignment(){
    let a=10
    let b=5
   
    console.log(a+=b)
    console.log(a-=b)
    console.log(a*=b)
    console.log(a/=b)
    console.log(a**=b)
    console.log(a%=b)
}
assignment()

//Equality opr
function equality(){
    let a=5
    let b=10
    let c="5"
    console.log(a==b)
    console.log(a==c)
    console.log(a===c)

}
equality()

//comparison opr
function comparison(){
    let a=10
    let b=5
    let c="10"
    let d=5
    console.log(a<=b)
    console.log(a<=c)
    console.log(b<=d)
    console.log(a!==c)
}
comparison()

//logical opr
function logical(){
    let a=10
    let b=10
    let c=20
    console.log(a==b && c>b)
    console.log(a===b || b<=c)
}
logical()
// ternary
function ternary(){
let M=38
let Result=(M>=35) ? "PASS" : "FAIL" 
console.log(Result)

}
ternary()



  