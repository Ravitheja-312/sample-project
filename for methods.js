// //for in 
// let obj={
//     name:"shalini",
//     age:7
// }
// for (let key in obj){
//     console.log(obj[key])
// }

// //for of

// let arr=["one","two","three"]
// let str="ravi"
// for (let dummy of str){
//     console.log(dummy)
// }
//for each

let arr=["one","two","three"]
arr.forEach((num,val)=>(
    console.log(num,val)
))

//MRF
//map
let mrf=[1,2,3,4,5,6,7,8,9]

let mul=mrf.map(el=>el*2)
console.log(mul)

//filter
let even=mrf.filter(el=>el%2==0)
console.log(even)

//reduce
let sum=mrf.reduce((old,cur)=>old+cur)
console.log(sum)
