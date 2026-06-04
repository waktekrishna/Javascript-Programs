// Title: Find Intersection of Two Arrays

arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

function findIntersection(arr1, arr2) {
    let interSection = []

    for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                interSection.push(arr1[i])
            }
       } 
    }
    return interSection
}
console.log(findIntersection(arr1, arr2));
