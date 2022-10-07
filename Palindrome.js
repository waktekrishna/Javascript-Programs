var str = "akki";

for(let i = 0; i<= str.length/2 ; i++)
{
    var flag = true
    if(str[i] !== str[str.length - 1- i])
    {
        flag = false
        break
    }
}
if(flag)
{
    console.log("Palindrome")
}
else
{
    console.log("Not a Palindrome")
}