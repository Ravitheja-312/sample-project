// class Info{
//     name="Shalini"
//     age=7
//     native="Coimbatore" //properties


//     details(){
//         console.log("My name is",this.name,"My age is",this.age,"My native is", this.native) //methods
//     }
// }
// let print=new Info
// print.details()
// console.log(print.name)



// class Flower{
//     constructor(name,color,fragance,season){
//         this.name=name
//         this.color=color
//         this.fragance=fragance
//         this.season=season

//     }
//     detail(){
//         console.log("I am",this.name)
//         console.log("My color",this.color)
//         console.log("My fragrance is",this.fragance)
//         console.log("My season is",this.season)
//     }
// }
// let rose=new Flower("Rose","Red","Mild","All season")
 
// rose.detail()

// const jasmine=new Flower("Jasmine","White","Strong","Summer")

// jasmine.detail()

class Students{
    constructor(Name,Section,M1,M2,M3,M4,M5){
        this.Name=Name
        this.Section=Section
        this.M1=M1
        this.M2=M2
        this.M3=M3
        this.M4=M4
        this.M5=M5
    }
    percentage(){
        console.log("Name:",this.Name)
        console.log("Section:",this.Section)
        console.log("Percentage:",(this.M1+this.M2+this.M3+this.M4+this.M5)/5)
    }
}

let S1=new Students("Ravi","A",90,98,88,89,100)
S1.percentage()
let S2=new Students("Hari","A",87,99,87,97,96)
S2.percentage()
let S3=new Students("Satish","B",87,88,90,93,95)
S3.percentage()
let S4=new Students("GK","B",90,89,80,85,99)
S4.percentage()
let S5=new Students("MD","B",80,98,88,87,97)
S5.percentage()