// import { createLogic } from "./controller";

// test("just a test", () =>{
//     const sumNum = (a:number, b:number): number => {
//         return a * b
//     };
//     expect(sumNum(1,4)).toBe(4)
// })



// Boolean 

// describe("test for Boolean ", () =>{
//         test("bool1", () =>{
//                 expect(true).toBe(true)
//             })
//         })
        
        
//         describe("test for Number ", () =>{
//     test("bool1", () =>{
//             expect(true).toBe(true)
//     })

//     test("bool1", () =>{
//         expect(true).toBe(true)
//     })

//     test("bool1", () =>{
//             expect(true).toBe(true)
//         })
    
//         test("bool1", () =>{
//                 expect(true).toBe(true)
//             })
// })

// describe("test for Number ", () =>{
//         test("num", () =>{
//                 expect(45).not.toBe(4)
//             })
        
//         })
        
        
//         String
        
        
//         describe("items of string", ()=>{
//                 test("test if a letter exist", () =>{
//                         let letter = "Peter"
                
                
//                         expect(letter).toMatch(/t/i)
//                     })

// })

// describe("items in an Array", ()=>{
//     test("text if Name exist in the Array", () =>{
//         let Array =  ["Apple", "Maggo", "cassave", "Rice"]

//         expect (Array).toContain("Maggo")
// })
// })


// test("just a test", () =>{
//         expect(true).toBe(true)
// })

// test("just a sum test", () =>{
//         const sumNum = (a: number, b: number) =>{
//                 return a + b
//             };
//             expect(sumNum(1,5)).toBe(6)
//         })
        
        
//         describe("working with object of Array", () => {
//                 test("test if a name exist in the Array", () => {
//                         let name = ["Peter", "Regina", "Maxwell", "Daniel"]

//                         let obj : any = { name: "Peter", score: 68}
                
//                         expect(obj).toEqual({ name: "Peter", score: 68});
                
//                         expect(obj).toEqual(
//                                 expect.objectContaining({
//                                         name: expect.any(String),
//                                         score: expect.any(Number)
//                                     })
//         )
//     })
// })


// describe("working with object of Array", () => {
//         test("test if a name exist in the Array", () => {
        
//                 let obj : any = { name: "Peter", score: 70}
        
//                 expect(obj).toEqual({ name: "Peter", score: 70});
        
//             })
//         })
//         // import { createLogic } from "./Index"
        
//         describe("Checking Our Index Ligin", () => {
//             test("check Our Index Login", () =>{
//                 let data = Array.from({ length: 6}, () =>{
//                     return {
//                 id: Math.floor(Math.random() * 100),
//                 name: Math.ceil(Math.random() * 100).toString(),
//                 score: Math.ceil(Math.random() * 100)
//             }
//         })

//         let value = {
//                 id: Math.floor(Math.random() * 100),
//                 name: Math.ceil(Math.random() * 100).toString(),
//                 score: Math.ceil(Math.random() * 100)
//         }

//         expect(createLogic(data, value)).toEqual(
//             expect.objectContaining({
//                 id: expect.any(Number),
//                 name: expect.any(String),
//                 score: expect.any(Number)
//             })
//         )
//     })
//     })