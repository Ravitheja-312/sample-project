//call back

function orderfood(input){
    setTimeout(() => {
        console.log("I am going to order food")
        input()
    }, 5000);
}

function eatfood(){
    setTimeout(() => {
        console.log("I am going to eat food")
    }, 4000);
}
orderfood(eatfood)

//call back hell
function brush(a){
    setTimeout(() => {
        console.log("Time taken to brush 1500")
        a()
    }, 1500);
}
function bath(b){
    setTimeout(() => {
        console.log("Time taken to bath 2500")
        b()
    }, 2500);
}
function eat(c){
    setTimeout(() => {
        console.log("Time taken to eat 3000")
        c()
    }, 3000);
}
function ready(d){
    setTimeout(() => {
        console.log("Time taken to ready 750")
        d()
    }, 750);
}

function relax(){
    setTimeout(() => {
        console.log("Time taken to relax 500")
    }, 500);
}
brush(()=>{
    bath(()=>{
        eat(()=>{
            ready(relax)
        })
    })
})