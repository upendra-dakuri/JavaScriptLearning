function longestword(str)
{
    var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
    var words=stringWithoutSpecialCharacters.split(' ');
    var longestword=0;
    for(var i=0;i<words.length;i++)
    {
        if(words[i].length>longestword)
        {
            longestword=words[i].length;
        
        }
    
    }
    return longestword;
}
console.log(longestword(('i am upendra dakuri')));
console.log(longestword('hello hi'))