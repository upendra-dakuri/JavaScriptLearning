function longestWord(sentence)
{
    var words=sentence.split(' ');
    var longWord=' ';
    for(var i=0;i<words.length;i++)
    {
        if(words[i].length>longWord.length)
        {
            longWord=words[i];
        }
    }
    return longWord;
}
console.log(longestWord('I am meghana nimmanagotti'));