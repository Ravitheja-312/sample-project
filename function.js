// function declaration

function demo(fruit){
    console.log("My name is" ,fruit, "I am good for health")
}
demo("apple")
demo("Guava")

//function expression

let detail=function(name,age){
    console.log("my name is",name)
    console.log("my age is", age)
}

detail("devi",25)
detail("ravi",26)

//arrow function

let movie=(ticket,snacks,petrol,parking)=>{
    console.log("Movie Expenses :", ticket+snacks+petrol+parking)
}
movie(200,180,160,30)

// IIFE

(function (){
    console.log("hello hi")
})()