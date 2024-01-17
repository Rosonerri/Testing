let studentReg = [
    {
        id: 0,
        name: "Peter",
        department: "Science",
        course: "HTML"
    },

    {
        id: 1,
        name: "Kelvin",
        department: "Art",
        course: "HTML"
    },

    {
        id: 2,
        name: "Max1",
        department: "commercial",
        course: "HTML"
    },
]

let addStudent = {
    id: studentReg.length + 1,
    name: "Max1",
    department: "Science",
    course: "HTML"
}
export const createStudent = (  studentReg: Array<{id: number, name: string, department: string, course: string}>, value: {id: number, name: string, department: string, course: string}) =>{
    studentReg.push(value)
    return value
}

createStudent(studentReg, addStudent)

console.log(studentReg)