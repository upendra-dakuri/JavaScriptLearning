function repeat(str,number)
{
    var finalstr='';
    for(var i=0;i<number;i++)
    {
        finalstr +=str;
    }
    return finalstr;
}
console.log(repeat('car',4));