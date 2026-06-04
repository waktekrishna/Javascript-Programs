// Title: Move All Zeros to End

arr = [4, 0, 5, 0, 1]

function moveZeros(arr) {
    var result = []
    var zeroCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
           result.push(arr[i])
        }else zeroCount++   
    }

    for (let j = 0; j < zeroCount; j++) {
        result.push(0)
    }
    return result
}
console.log(moveZeros(arr));
