function solve(input){
    let studentsMap = new Map();

    for (let studentTokens of input){
        let studentArr = studentTokens.split(' ');
        let studentName = studentArr.shift();
        let studentGrades = studentArr.map(Number);

        if (studentsMap.has(studentName)){
            for (let grade of studentGrades){
                studentsMap.get(studentName).push(grade);
            }
        }
        else{
            studentsMap.set(studentName, studentGrades);
        }
    }

    let sortedStudents = Array.from(studentsMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [studentName, studentGrades] of sortedStudents){
        let totalGrades = studentGrades.length;
        let gradesSum = studentGrades.reduce(((acc, grade) => acc + grade), 0);

        console.log(`${studentName}: ${(gradesSum / totalGrades).toFixed(2)}`);
    }
}

solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);