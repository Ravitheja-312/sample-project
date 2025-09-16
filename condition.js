//else if
let age=38
if(age>=0 && age<=2){
    console.log("Infant's")
}

else if(age>2 && age<18){
    console.log("child")
}

else if(age>=18 && age<50){
    console.log("Adult")

}

else if(age>=50 && age<120){
    console.log("Senior Citizen")

}

else{
    console.log("Check the age")
}

// switch
let pet="dog"

switch(pet){
    case "cat":
        console.log("Cat is my pet")
        break;
   
    case"dog":
        console.log("Dog is my pet")
        break;
    case"fish":
        console.log("Fish is my pet")
        break;
    default:
        console.log("I dont have any pets")

}