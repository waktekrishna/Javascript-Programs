// Title: Find the Largest Sum of Consecutive 2 Elements

arr = [1, 4, 2, 10, 3]

function maxConsecutiveSum(arr) {
    var highest = 0
   for (let i = 0; i < arr.length -1; i++) {
        if ((arr[i] + arr[i+1] > highest)) {
            highest = arr[i] + arr[i+1]
        }
    }
    return highest
}
console.log(maxConsecutiveSum(arr));
