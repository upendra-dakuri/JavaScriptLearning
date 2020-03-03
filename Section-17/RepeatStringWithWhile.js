function repeatStirng(str,number)
{
    var finalstr=' ';
    while(number>0)
    {
        finalstr+=str;
        number--;
    }
    return finalstr;
}
console.log(repeatStirng('car',4));