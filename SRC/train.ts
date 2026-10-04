// MITASK-R:
// "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.
// Masalan: calculate("1 + 3") return 4

function calculate(str: string): number {
    const [a, oper, b] =
        str.split(" ");
    if (oper === "+") {
        return Number(a) + Number(b);
    }
    if (oper === "-") {
        return Number(a) - Number(b);
    }
    if (oper === "*") {
        return Number(a) * Number(b);
    }
    if (oper === "/") {
        return Number(a) / Number(b);
    }

    return 0;
}

console.log(calculate("1 + 3"));
console.log(calculate("1478 / 23"));

// MITASK-Q:
// Objectda berilgan string propertysi borligini tekshirsin.
// Masalan: hasProperty({name: "BMW"}, "name") return true

// function hasProperty(object: object, property: string): boolean {
//     return property in object;
// }

// console.log(hasProperty({ object: "car" }, "object"));
// console.log(hasProperty({ model: "Audi" }, "owner"));

// MITASK-P:
// Objectni nested array sifatida convert qilib qaytarsin.
// Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]

// function objectToArray(data: object): [string, any][] {
//     return Object.entries(data);
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// console.log(objectToArray({ myFavouriteNumber: 7, doubledOne: 14 }));



// MITASK-O :
// Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin. 
// Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//     let summa = 0;

//     for (const value of arr) {
//         if (typeof value === "number") {
//             summa += value;
//         }
//     }
//     return summa;
// }

// console.log(calculateSumOfNumbers([55, true, { raqam: 20 }, "45", 15]));

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