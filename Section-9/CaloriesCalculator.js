function daysCalc(day)
{
    if(day === 'monday')
    {
        return 1500;
    }
    if(day === 'tuesday')
    return 2000;
    if(day === 'wednesday')
     return 2500;
     if(day === 'thursday')
     return 2500;
     if(day === 'friday')
     return 3300;
     if(day === 'saturday')
     return 1000;
     if(day === 'sunday')
     return 1200;
     else
     return 'please choose a valid option';
}
var idealCalories=2000*7;
function acutalCalories()
{
    return daysCalc('monday')+daysCalc('tuesday')+daysCalc('wednesday')+daysCalc('thursday')
    +daysCalc('friday')+daysCalc('saturday')+daysCalc('sunday');
}
console.log(acutalCalories());
function compare(acutalCalories,idealCalories)
{
    if(acutalCalories === idealCalories)
    return 'you are in right track';
    if(acutalCalories > idealCalories)
    return 'you have to go to gym';
    else
    return 'Time for Seconds';
}
console.log(compare());