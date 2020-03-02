//var name='meghana';
function unique(name){
for(var i=0;i<name.length;i++)
{
    if(name.indexOf(name[i]) !== name.lastIndexOf(name[i]))
    {
        return false;
    }
}
return true;
}
console.log(unique('meghana'));