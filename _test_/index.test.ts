import { createStudent } from "../Index"

describe("Checking our createStudent", () => {
    test("check our createStudent", () =>{
        let studentReg = Array.from({ length: 4}, () =>{
            return {
                id: 0,
                name: "Peter",
                department: "Science",
                course: "HTML"

            }
        })

        let value = {
                id: 1,
                name: "Kelvin",
                department: "Art",
                course: "HTML"
        }

    expect(createStudent(studentReg, value)).toEqual(
        expect.objectContaining({
            id:expect.any(Number),
            name:expect.any(String),
            department:expect.any(String),
            course:expect.any(String)
        })
    )
    })
})

