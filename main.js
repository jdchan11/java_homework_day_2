//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function showFaves(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        if(Array.isArray(Object.values(person)[i])){
            console.log(Object.values(person)[i])
        } else {
            console.log(Object.values(person)[i])
        }
    }
}
showFaves(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = (gender) => {
        console.log(`${this.name} is ${gender} and is ${this.age} years old.`)
    }

    // Create another arrow function for the addAge method
    this.addAge = () => {
        return ++this.age
    }
}
let person1 = new Person('Jane', 36)
let person2 = new Person('John', 39)

console.log(person1.printInfo('female'))
console.log(person2.printInfo('male'))

console.log(person1.addAge())
console.log(person1.addAge())
console.log(person1.addAge())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (str1) => {
    return new Promise( (resolve, reject) => {
        if(str1.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isBigWord('testing1234')

.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small Word')
})


