/*let weight; 

console.log(typeof weight)


let name = 'Marcos' //string 
let age = 20 //integer 
let stars = 1.5 //float
let isSubscribed = true //boolean */


let student = {
    name: 'Marcos', //string 
    age:  20, //integer 
    weight: 72.5, //float
    isSubscribed: true //boolean
}

//console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)


let students = []

students = [
    student
]
console.log(students)
console.log(students[0])

const john = {
    name: "John", 
    age: 23,
    weight: 74.8,
    isSubscribed: true
}

students = [
    student,
    john
]
console.log(students)


students[1] = john //Algo Novo 
console.log(students)