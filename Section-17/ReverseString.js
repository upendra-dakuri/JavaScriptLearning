function reverseStr(str)
{
    return str.split('').reverse().join('');
}
console.log(reverseStr('omniwyse'));

function reverse(str)
{
    str=str.split(' ');
    var array=[];
    array.push(str[1],str[0]);
    return array.join(' ');
}
console.log(reverse('omniwyse intern'));