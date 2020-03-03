/*function swapping(str)
{
    var names=str.split(' ');
    for(var i=1;i<names.length;i++)
    {
        var temp=names[i];
        names[i]=names[i-1];
        names[i-1]=temp;
    }
    return names;
}
console.log(swapping('meghana dakuri'));
console.log(swapping('bharath nimmna'));*/


function swapping(str)
{
    return str.split(' ').reverse().join(' ');
}
console.log(swapping('hello hi omni'));
console.log(swapping('omni wyse'));