const studentName = "Tasrif";

const marks = [];

marks.push(75);
marks.push(82);
marks.push(45);
marks.push(90);
marks.push(60);

function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

function calculateAverage(marks) {
    const total = calculateTotal(marks);

    return total / marks.length;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    }
    else if (average >= 85) {
        return "A";
    }
    else if (average >= 80) {
        return "B+";
    }
    else if (average >= 75) {
        return "B";
    }
    else if (average >= 70) {
        return "C+";
    }
    else if (average >= 65) {
        return "C";
    }
    else if (average >= 60) {
        return "D+";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

function checkResult(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 50) {
            return "Fail";
        }
    }

    return "Pass";
}

function findHighestMark(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

function countPassedSubjects(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }

    return count;
}

const total = calculateTotal(marks);
const average = calculateAverage(marks);
const grade = calculateGrade(average);
const result = checkResult(marks);
const highestMark = findHighestMark(marks);
const passedSubjects = countPassedSubjects(marks);

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Highest Mark:", highestMark);
console.log("Passed Subjects:", passedSubjects);
