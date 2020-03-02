function goodmorning(name,msg){ //regular function
    return 'Good morning' +name+ 'had your' +msg+ '?.';
}
console.log(goodmorning('meghana','braeakfast'));

var goodmorning=function(msg) //anonymous function
{
    return msg+'good morning omniwyse interns....'
}
console.log(goodmorning('hello'));

var goodmorning=(functon(firstname,lastname)  //IIFE(immediately invoked function expression)
{
    return 'my name is ' +firstname+ ' '+lastname+ '!.';  
}());
Console.log(goodmorning);