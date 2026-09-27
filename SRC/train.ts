// MITASK-O :
// Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin. 
// Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr: any[]): number {
    let summa = 0;

    for (const value of arr) {
        if (typeof value === "number") {
            summa += value;
        }
    }
    return summa;
}

console.log(calculateSumOfNumbers([55, true, { raqam: 20 }, "45", 15]));

// MITASK-N:

// function palindromCheck(word: string): boolean {
//     return word ===
//         word.split("").reverse().join("");
// }

// console.log(palindromCheck("mom"));
// console.log(palindromCheck("horse"));

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