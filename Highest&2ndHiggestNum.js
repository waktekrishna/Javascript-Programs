arr = [23,3,110,90,92,25];
let temp;

for(let i=0 ; i<arr.length ; i++)
{
    for(let j =1 ; j<arr.length ; j++)
    {
        if(arr[i]<arr[j])
        {
            temp = arr[i]
            arr[i]=arr[j]
            arr[j]= temp
        }
    }
}
console.log(arr[0])


for(let i=1 ; i<arr.length ; i++)
{
    for(let j =2 ; j<arr.length ; j++)
    {
        if(arr[i]<arr[j])
        {
            temp = arr[i]
            arr[i]=arr[j]
            arr[j]= temp
        }
    }
}
console.log(arr[1])












// for(let i=1; i<arr.length;i++)
// {
//   no = arr[0];
//   if(arr[i]>no)
//   {
//     temp = arr[0]
//     arr[0]=arr[i];
//     arr[i]=temp;
//   }

// }
// console.log(arr[0]);



// let largest = arr[1];
// let temp1;
// for (let i=2; i<=arr.length;i++)
// {
//     if (arr[i]>largest) 
//     {
//          temp1 = largest;
//          largest=arr[i];
//          arr[i]=temp1
//     }
// }
// console.log(largest);


