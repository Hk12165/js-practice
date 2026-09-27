// These are the comparisons i am testing:


console.log("1" == 5)
console.log(10 < 100)
console.log("50" === 50)
console.log(0 == false)
console.log(0 == true)
console.log(1 == true)
console.log(19 > 0)
console.log(null == 0)
console.log(null > 0)
console.log(null == undefined)
console.log(null === undefined)
console.log(0 == "")
console.log(NaN === NaN)
console.log("1" == 1)


/*

My Predictions for the following comparisons:

false
true
false
true
false
true
true
true
false
false
false
true
false

*/

// These are if checks using different falsy values:


if (false) {
    console.log("false is truthy")
}
else {
    console.log("false is falsy")
}    




if (null) {
    console.log("null is truthy")
}
else {
    console.log("null is falsy")
}





if (undefined) {
    console.log("undefined is truthy")
}
else {
    console.log("undefined is falsy")
}




if (NaN) {
    console.log("NaN is truthy") 
}
else {
    console.log("NaN is falsy")
}




if (0) {
    console.log("0 is truthy")
}
else {
    console.log("0 is falsy")
}




if ("") {
    console.log("'' is truthy")
}
else {
    console.log("'' is falsy")
}



if ([]) {
    console.log("[] is truthy")
}
else {
    console.log("[] is falsy")
}



if ({}) {
    console.log("{} is truthy")
}
else {
    console.log("{} is falsy")
}



if ("0") {
    console.log("'0' is truthy")
}
else {
    console.log("'0' is falsy")
}






const age = 24;
const city = "Delhi";
const isStudent = false;

if (age > 18 && city === "Mumbai" || isStudent){
    console.log("Then u are stupid")
}
else {
    console.log("Then u are poor")
}