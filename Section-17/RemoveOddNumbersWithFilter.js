function remove(array)
{
    return array.filter(function(a)
    {
        return (a%2===0);
    })
}
console.log(remove([10,4,7,9,33]));
console.log(remove([10,4,7,44,33]));