/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

    const createWordPyramid = (input) => {
        for (let i = 1; i <= input.length; i++) {
            console.log(input.slice(0, i))
        }
    }

createWordPyramid('Hello World!');