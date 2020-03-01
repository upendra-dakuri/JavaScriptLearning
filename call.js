var person1=
{
    firstname:'meghana',
    lastname:'dakuri'
};
var person2=
{
    firstname:'bharath',
    lastname:'nimmana'
};
function hello(greeting)
{
    console.log(greeting+' '+this.firstname+' '+this.lastname); 
}
hello.call(person1,'hi');