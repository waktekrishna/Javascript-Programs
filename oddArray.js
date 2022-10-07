// let arr = [ 1, 2, 3, 7, 5, 6,  8];

// const odds = [];

// arr.forEach(number => {
//   if (number % 2 !== 0) {
//     odds.push(number);
//   }
// });

//                 // for (let i = 0; i<arr.length;i++)
//                 // {
//                 //     if (arr[i]%2===0)
//                 //     {
//                 //         console.log(i)       
//                 //     }
//                 // }

// console.log(odds); 










// num=arr[1];
// for(let i=2; i<arr.length;i++)
// {
//   if(arr[i]> num )
//   {
//     arr[1]=arr[i];
//   }

// }
// // console.log(arr[1]);

// arr[0]=arr[1]



arr = [23,3,11,90,9,25];
let temp;

for(let i=1; i<arr.length;i++)
{
  no = arr[0];
  if(arr[i]>no)
  {
    temp = arr[0]
    arr[0]=arr[i];
    arr[i]=temp;
  }

}
console.log(arr[0]);



let largest = arr[1];
let temp1;
for (let i=2; i<=arr.length;i++)
{
    if (arr[i]>largest) 
    {
         temp1 = largest;
         largest=arr[i];
         arr[i]=temp1
    }
}
console.log(largest);



// for(let i=0 ;i<arr.length;i++)
// {
//   console.log( arr[i]);
// }


// let array1 = [3 , 6, 2, 56, 32, 5, 89, 32];
// let largest1 = array.sort((a,b)=>a-b).reverse()[0];
// console.log(largest1)



// let largest = array1.sort((a,b)=>a-b).reverse()[1];
// console.log(largest)
// for(let i=0 ;i<array1.length;i++)
// {
//   console.log( array1[i]);
// }


// const str = 'Kriisshna';
// for (const s of str) 
// {
//   console.log(s)
// }


// var x = "akki,krish,akki,bhivdya,pratik"
// x = Array.from(new Set(x.split(','))).toString();
// console.log(x);

// const str = "Kriissh"
// str.ma
// for(let i=0;i<str.length;i++)
// {
//   a=str[2]
//   if(str[i]=a)
//   {
//     console.log(str[i])
//   }
// }


// //indexOf(char/substring)
// var str="Hi, my name is Sam!"
// if (str.indexOf("is")!=-1)
// {
//   console.log("Sam is in there!")
// }

