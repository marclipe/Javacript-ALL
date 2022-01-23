/*

Function() construtor

* expressão new
* criar um novo objeto 
* this keyboard 

*/

function Person(name) {
    this.name = name 
    this.walk = function() {
        return this.name + " está andando"
    }
}
const marc = new Person("Marcos") //exp.. new 
const lipe = new Person("Felipe")
console.log(marc.walk())
console.log(lipe.walk()) 