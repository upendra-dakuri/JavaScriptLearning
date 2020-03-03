function oddNumbersRemove(array)
{
    var array1=[];
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
        {
            array1.push(array[i]);
        }
    }
    return array1;
}
console.log(oddNumbersRemove([10,3,6,5,7,9,12,8]));
console.log(oddNumbersRemove([3,8,99,243,55,100]));