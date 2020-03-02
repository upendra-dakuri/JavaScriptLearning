function convertKTF(kel)
{
    //var kelvinTemp=kel;
    var celsiusTemp=kel-273.15;
    var fahrenheitTemp=celsiusTemp*(9/5)+32;
    return fahrenheitTemp
}
console.log("Temperature in Fahrenheit is :"+convertKTF(301));