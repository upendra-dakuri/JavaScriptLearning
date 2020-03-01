var marksArray= [84,35,50,67,90];
var file=function(marks)
{
    return marks>50;
}
console.log(marksArray.filter(file));