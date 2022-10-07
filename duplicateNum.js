arr = [2 ,4 ,6 ,5 ,1 ,9 ,5 ,3 ,2 ,6 ];


for(let i =0 ; i< arr.length ; i++)
{
    var flag = true
    for(let j = i +1 ; j< arr.length ; j++)
    {
        if(arr[i] == arr[j])
        (
            flag = false
        )
    }
    if(flag == false)
    {
        console.log(arr[i])
    }
}


// for(let i=2 ; i<=20 ; i++)
// {
//     var flag = true
//     for(let j = 2 ; j < i ; j++)
//     {
//         if(i%j == 0)
//         {
//             flag = false
//             break
//         }
//     }
//     if(flag)
//     {
//         console.log(i)
//     }
// }

