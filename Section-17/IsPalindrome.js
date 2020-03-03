function palindrome(str)
{
    var reverse=str.split('').reverse().join('');
    if(str===reverse)
    {
        return true;
    }
    return false;
}
console.log(palindrome('amma'));
console.log(palindrome('omniwyse'))