function varTest()
{
    var x=10;
    if(true)
    {
        var x=4;
        console.log(x);
    }
    console.log(x);
}
varTest();


function letTest()
{
    let x=12;
    if(true)
    {
        let x=3;
        console.log(x);
    }
    console.log(x);
}
letTest();