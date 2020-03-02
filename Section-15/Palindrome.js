function palindrome(string)
{
    string=string.replace('/\W/g','').toLowerCase();
    return (string == string.split('').reverse().join(''));
}
console.log(palindrome('ers'));