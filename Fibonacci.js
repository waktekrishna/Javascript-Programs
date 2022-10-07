var a = 0;
var b = 1;
var c = 0;

for(let i = 0; i<7 ; i++)
{
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}