function add(array)
{
    var max=Math.max(array[0],array[1]);
    var min=Math.min(array[0],array[1]);
    var total=0;
    for(var i=min;i<=max;i++)
    {
        total=total+i;
    }
    console.log(total);
}
add([1,5]);