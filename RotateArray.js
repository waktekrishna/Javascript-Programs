// Title: Rotate Array Right by 1

arr = [1, 2, 3, 4, 5]

function rotateRight(arr) {
    let previous = arr[0]
    arr[0] = arr[arr.length - 1]
    for (let i = 0; i < arr.length -1; i++) {
        const temp = arr[i + 1]
        arr[i+1] = previous
        previous = temp
    }
    return arr
}
console.log(rotateRight(arr));