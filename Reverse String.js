// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}
let string = "Akki";
const result = reverseString(string);

console.log(result);