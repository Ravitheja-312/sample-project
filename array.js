let arr=["one","two","three","four",[1,2,3,4]]

console.log(arr)

console.log(arr[3])
 console.log(arr[4][2])
 let fruit=["apple","banana","orange","mango","kiwi"]

 fruit.push("pineapple")
 console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.shift()
console.log(fruit)
fruit.unshift("jackfruit")
console.log(fruit)

console.log(fruit.slice(0,3))

fruit.splice(2,0,"strawberry")
console.log(fruit)

fruit.splice(1,1,"apple")
console.log(fruit)

fruit.splice(3,1)
console.log(fruit)


let num=[1,2,1,3,1,4,1,5,1,6,1,7]

console.log(num.indexOf(1))

console.log(num.lastIndexOf(1))

console.log(fruit.concat(num))

console.log(fruit.reverse())

console.log(fruit.sort())

console.log(fruit.reverse())

console.log(fruit.join(","))