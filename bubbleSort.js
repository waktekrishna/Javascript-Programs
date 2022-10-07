var a = [12,66,34,22,54,28,58,2,47,92,64];    
// let temp;
// for(let i=0;i<a.length;i++)
// {
//   for(let j=i+1;j<a.length;j++)
//   {
//     if(a[i]<a[j])
//     {
//       temp = a[i];
//       a[i]=a[j];
//       a[j]=temp;
//     }
//   }
// }
// for(let i=0;i<a.length;i++)
// {
//   console.log(a[i])
// }


let i,j,temp;
let n = a.length;
for(i=0;i<a.length;i++)
{
  temp=a[i];
  j = i -1;
  while(j>=0 && temp<=a[j])
  {
    a[j + 1] =a[j]
    j = j - 1;
  }
  a[j+1] = temp;
}

for( i=0;i<a.length;i++)
{
  console.log(a[i])
}
