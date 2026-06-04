// Title: Find Missing Number

arr = [2, 3, 5, 6]
function findMissing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const temp = arr[i + 1] -1
        if (arr[i] != temp ) {
            return arr[i] +1
        }
    }
}
console.log(findMissing(arr));