// ===== DAY 5: switch statements + grade score calculator =====

// --- Task 1: grade score calculator ---
function gradeFor(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 75) {
        return 'B';
    }
    else if (score >= 50) {
        return 'C';
    }
    else if (score >= 40) {
        return 'D';
    }
    else {
        return 'F';
    }
}

console.log(gradeFor(90));
console.log(gradeFor(78));
console.log(gradeFor(59));
console.log(gradeFor(60));
console.log(gradeFor(85));
console.log(gradeFor(49));



// --- Task 2: day name calculator ---

function  dayName(num) {
    switch (num) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
        default: return 'Invalid day number';
    }
}

console.log(dayName(1));
console.log(dayName(2));
console.log(dayName("3")); // this will return "Invalid day number" because "3" is string not a number
console.log(dayName(4));
console.log(dayName(5));
console.log(dayName(6));
console.log(dayName(7));
console.log(dayName(8));


// --- Task 3: fall through demo ---
function fallDemo(n) {
    switch (n) {
        case 1: console.log("one")
        break;
        case 2: console.log("two")
        break;
        default: console.log("default")
        break;
    }
}
fallDemo(2)   