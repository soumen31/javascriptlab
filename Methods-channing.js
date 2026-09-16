const students = [
    { name:"Alice", grade:92 },
    { name:"Bob", grade:78 },
    { name:"Charlie", grade:85 },
    { name:"Diana", grade:95 },
    { name:"Eve", grade:65 }
];

const honorRoll = students
    .filter(student => student.grade >= 80)
    .map(student => student.name)
    .sort();

console.log(honorRoll); 


const value = students
    .filter(student => student.grade >= 70)
    .map(student => student.name)
    .sort();
    const averageGrade = passingStudents.reduce((sum, s) => sum + s.grade, 0) / passingStudents.length;

console.log(value); 