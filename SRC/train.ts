// MITASK-N:
function palindromCheck(word: string): boolean {
    return word ===
        word.split("").reverse().join("");
}

console.log(palindromCheck("mom"));
console.log(palindromCheck("horse"));

// MITASK-M:

// function getSquareNumbers(numbers: number[]): object[] {
//     return numbers.map((number) => {
//         return {
//             number: number,
//             square: number ** 2
//         };
//     })
// }

// console.log(getSquareNumbers([4, 5, 8]));


// MITASK-L:

// function reverseSentence(sntc: string): string {
//     return sntc
//         .split(" ")
//         .map((word: string) =>
//             word.split("").reverse().join(""))
//         .join(" ");
// }

// console.log(reverseSentence("we like coding!"));
// console.log(reverseSentence("Hello World!"));