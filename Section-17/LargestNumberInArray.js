function largest(array)
{
    var max=array[0];
    for(var i=1;i<array.length;i++)
    {   
    if(array[i]>max)
    {
        max=array[i];
    }
}
return max;
}

console.log(largest([10,40,50,10,4]));