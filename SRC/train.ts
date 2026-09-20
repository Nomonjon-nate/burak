// MITASK-L:

function reverseSentence(sntc: string): string {
    return sntc
        .split(" ")
        .map((word: string) =>
            word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("we like coding!"));
console.log(reverseSentence("Hello World!"));