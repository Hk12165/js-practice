// ===== DAY 4: if/else + ternary =====

// --- Task 1: ageCategory using if / else if / else ---
// Order matters: the first true condition wins, so no need to recheck age >= 13

function ageCategory(age) {
    if (age < 13) {
        return "child"
    } else if (age <= 19) {
        return "teen"
    } else {
        return "adult"
    }
}
console.log(ageCategory(12))   // child
console.log(ageCategory(16))   // teen
console.log(ageCategory(30))   // adult



// --- Task 2: if/else rewritten as ternaries ---
// Pattern: condition ? valueIfTrue : valueIfFalse
console.log(null ? "null is truthy" : "null is falsy")
console.log(NaN ? "NaN is truthy" : "NaN is falsy")
console.log(0 ? "0 is truthy" : "0 is falsy")

const age = 17;
const city = "Mumbai";
const isStudent = false;
// && runs before ||, so this is ((age > 18 && city) || isStudent) ? a : b
console.log((age > 18 && city === "Mumbai") || isStudent ? "Then u are stupid" : "Then u are poor")

const num = 18;
console.log(num % 2 === 0 ? "Even" : "Odd")


// --- Task 3: canVote ---
// Gotcha: age >= 18 is already true/false, so the ternary is optional

function canVote(age) {
    return age >= 18 ? true : false
}
console.log(canVote(11))   // false