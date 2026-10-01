const fname = "Doomer"
const age = 21
console.log(`My name is ${fname.toUpperCase()} and I am ${age} years old`)
console.log(fname.slice(0, 3))  
console.log(fname.slice(-3))     


// Strings are immutable

let greeting = "hello"
greeting.toUpperCase()
console.log(greeting)   // still "hello" — the return value was thrown away

greeting = greeting.toUpperCase()
console.log(greeting)   // now "HELLO" — you reassigned it 



function formatIntro(name, age) {
    return `My name is ${name} and I am ${age} years old`

}
const intro = formatIntro("Doomer", 21)
console.log(intro.toUpperCase())
console.log(intro.length)




function madlibs(adjective, noun, verb, place) {
    return `Them ${adjective} ${noun} ${verb} ${place}`
}
const madlib = madlibs("reckless", "driver", "drunk in", "the downtown")
const madlib2 = madlibs("dumb", "people", "parking their cars", "anywhere")
const madlib3 = madlibs("damn", "girls", "peeing", "in the bathroom")
console.log(madlib)
console.log(madlib2)
console.log(madlib3)

